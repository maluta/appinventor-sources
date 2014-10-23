// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/app-inventor/master/mitlicense.txt

package com.google.appinventor.client;

import com.google.appinventor.client.boxes.MotdBox;
import com.google.appinventor.client.widgets.DropDownButton;
import com.google.appinventor.client.widgets.DropDownButton.DropDownItem;
import com.google.appinventor.client.widgets.TextButton;
import com.google.common.collect.Lists;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;

import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.http.client.UrlBuilder;
import com.google.appinventor.client.explorer.commands.SaveAllEditorsCommand;
import com.google.appinventor.client.explorer.commands.ChainableCommand;
import com.google.appinventor.shared.rpc.project.ProjectRootNode;
import com.google.appinventor.client.tracking.Tracking;


import java.util.List;

import static com.google.appinventor.client.Ode.MESSAGES;

/**
 * The top panel, which contains the main menu, various links plus ads.
 *
 */
public class TopPanel extends Composite {
  // Strings for links and dropdown menus:
  private final DropDownButton accountButton;
  public DropDownButton languageDropDown;

  private final String WIDGET_NAME_SIGN_OUT = "Signout";
  private final String WIDGET_NAME_USER = "User";
  private static final String WIDGET_NAME_LANGUAGE = "Language";

  private static final String SIGNOUT_URL = "/ode/_logout";
  private static final String LOGO_IMAGE_URL = "/images/logo.png";
  private static final String LANGUAGES_IMAGE_URL = "/images/languages.svg";

  private final VerticalPanel rightPanel;  // remember this so we can add MOTD later if needed

  final Ode ode = Ode.getInstance();

  /**
   * Initializes and assembles all UI elements shown in the top panel.
   */
  public TopPanel() {
    /*
     * The layout of the top panel is as follows:
     *
     *  +-- topPanel ------------------------------------+
     *  |+-- logo --++-----tools-----++--links/account--+|
     *  ||          ||               ||                 ||
     *  |+----------++---------------++-----------------+|
     *  +------------------------------------------------+
     */
    HorizontalPanel topPanel = new HorizontalPanel();
    topPanel.setVerticalAlignment(HorizontalPanel.ALIGN_MIDDLE);

    // Create the Tools
    TopToolbar tools = new TopToolbar();
    ode.setTopToolbar(tools);

    // Create the Links
    HorizontalPanel links = new HorizontalPanel();
    links.setStyleName("ode-TopPanelLinks");
    links.setVerticalAlignment(HorizontalPanel.ALIGN_MIDDLE);

    // My Projects Link
    TextButton myProjects = new TextButton(MESSAGES.myProjectsTabName());
    myProjects.setStyleName("ode-TopPanelButton");

    myProjects.addClickHandler(new ClickHandler() {
      @Override
      public void onClick(ClickEvent event) {
        ode.switchToProjectsView();
      }
    });

    myProjects.setStyleName("ode-TopPanelButton");
    links.add(myProjects);

    TextButton guideLink = new TextButton(MESSAGES.guideTabName());
    guideLink.addClickHandler(new ClickHandler() {
      @Override
      public void onClick(ClickEvent clickEvent) {
        Window.open("http://appinventor.mit.edu/explore/library", "_ai2", "scrollbars=1");
      }
    });

    guideLink.setStyleName("ode-TopPanelButton");
    links.add(guideLink);

    // Feedback Link
    TextButton feedbackLink = new TextButton(MESSAGES.feedbackTabName());
    feedbackLink.setStyleName("ode-TopPanelButton");

    feedbackLink.addClickHandler(new ClickHandler() {
      @Override
      public void onClick(ClickEvent event) {
        Window.open("http://something.example.com", "_blank", "scrollbars=1");
      }
    });

    feedbackLink.setStyleName("ode-TopPanelButton");
    links.add(feedbackLink);

    // Gallery Link
    if (Ode.getInstance().getUser().getIsAdmin()) {
      TextButton gallery = new TextButton(MESSAGES.galleryTabName());
      gallery.addClickHandler(new ClickHandler() {
        @Override
        public void onClick(ClickEvent clickEvent) {
          Window.open("http://gallery.appinventor.mit.edu", "_blank", "scrollbars=1");
        }
      });

      gallery.setStyleName("ode-TopPanelButton");
      links.add(gallery);
    }

    // Create the Account Information
    rightPanel = new VerticalPanel();
    rightPanel.setHeight("100%");
    rightPanel.setVerticalAlignment(VerticalPanel.ALIGN_MIDDLE);

    HorizontalPanel account = new HorizontalPanel();
    account.setStyleName("ode-TopPanelAccount");

    // Account Drop Down Button
    List<DropDownItem> userItems = Lists.newArrayList();

    // Sign Out
    userItems.add(new DropDownItem(WIDGET_NAME_SIGN_OUT, MESSAGES.signOutLink(), new SignOutAction()));

    accountButton = new DropDownButton(WIDGET_NAME_USER, " " , userItems, true);
    accountButton.setStyleName("ode-TopPanelButton");

    // Language
    List<DropDownItem> languageItems = Lists.newArrayList();
    String[] localeNames = LocaleInfo.getAvailableLocaleNames();
    String nativeName;
    for (String localeName : localeNames) {
      nativeName = LocaleInfo.getLocaleNativeDisplayName(localeName);
      if (!localeName.equals("default")) {
        SelectLanguage lang = new SelectLanguage();
        lang.setLocale(localeName);
        if (localeName == "zh_CN") {
          nativeName = MESSAGES.SwitchToSimplifiedChinese();
        } else if (localeName == "zh_TW") {
          nativeName = MESSAGES.SwitchToTraditionalChinese();
        } else if (localeName == "es_ES") {
          nativeName = MESSAGES.SwitchToSpanish();
        } else if (localeName == "pt_BR") {
          nativeName = MESSAGES.SwitchToPortuguese();
        }
        languageItems.add(new DropDownItem(WIDGET_NAME_LANGUAGE, nativeName, lang));
      }
    }
    Image languageIcon = new Image(LANGUAGES_IMAGE_URL + "?t=" + System.currentTimeMillis());
    languageIcon.setSize("20px", "20px");

    languageDropDown = new DropDownButton(WIDGET_NAME_LANGUAGE, languageIcon, languageItems, true);
    languageDropDown.setStyleName("ode-TopPanelButton");

    account.setVerticalAlignment(VerticalPanel.ALIGN_MIDDLE);
    account.add(links);
    account.add(languageDropDown);
    account.add(accountButton);

    rightPanel.add(account);

    // Add the Logo, Tools, Links to the TopPanel
    addLogo(topPanel);
    topPanel.add(tools);
    topPanel.add(rightPanel);
    topPanel.setCellVerticalAlignment(rightPanel, HorizontalPanel.ALIGN_MIDDLE);
    rightPanel.setCellHorizontalAlignment(account, HorizontalPanel.ALIGN_RIGHT);
    topPanel.setCellHorizontalAlignment(rightPanel, HorizontalPanel.ALIGN_RIGHT);

    initWidget(topPanel);

    setStyleName("ode-TopPanel");
    setWidth("100%");
  }

  private void addLogo(HorizontalPanel panel) {
    // Logo should be a link to App Inv homepage. Currently, after the user
    // has logged in, the top level *is* ODE; so for now don't make it a link.
    // Add timestamp to logo url to get around browsers that agressively cache
    // the image! This same trick is used in StorageUtil.getFilePath().
    Image logo = new Image(LOGO_IMAGE_URL + "?t=" + System.currentTimeMillis());
    logo.setSize("40px", "40px");
    logo.setStyleName("ode-Logo");
    logo.addClickHandler(new ClickHandler() {
      @Override
      public void onClick(ClickEvent clickEvent) {
        Window.open("http://appinventor.mit.edu", "_ai2", "scrollbars=1");
      }
    });
    panel.add(logo);
    panel.setCellWidth(logo, "50px");
    Label title = new Label("MIT App Inventor 2");
    Label version = new Label("Beta");
    title.setStyleName("ode-LogoText");
    version.setStyleName("ode-LogoVersion");
    VerticalPanel titleContainer = new VerticalPanel();
    titleContainer.add(title);
    titleContainer.add(version);
    titleContainer.setCellHorizontalAlignment(version, HorizontalPanel.ALIGN_RIGHT);
    panel.add(titleContainer);
    panel.setCellWidth(titleContainer, "180px");
    panel.setCellHorizontalAlignment(logo, HorizontalPanel.ALIGN_LEFT);
    panel.setCellVerticalAlignment(logo, HorizontalPanel.ALIGN_MIDDLE);
  }

  private void addMotd(VerticalPanel panel) {
    MotdBox motdBox = MotdBox.getMotdBox();
    panel.add(motdBox);
    panel.setCellHorizontalAlignment(motdBox, HorizontalPanel.ALIGN_RIGHT);
    panel.setCellVerticalAlignment(motdBox, HorizontalPanel.ALIGN_BOTTOM);
  }

  /**
   * Updates the UI to show the user's email address.
   *
   * @param email the email address
   */
  public void showUserEmail(String email) {
    accountButton.setCaption(email);
  }

  /**
   * Adds the MOTD box to the right panel. This should only be called once.
   */
  public void showMotd() {
    addMotd(rightPanel);
  }

  private static class SignOutAction implements Command {
    @Override
    public void execute() {
      Window.Location.replace(SIGNOUT_URL);
    }
  }

  private class SelectLanguage implements Command {

    private String localeName;

    @Override
    public void execute() {
      final String queryParam = LocaleInfo.getLocaleQueryParam();
      Command savecmd = new SaveAction();
      savecmd.execute();
      if (queryParam != null) {
        UrlBuilder builder = Window.Location.createUrlBuilder().setParameter(
            queryParam, localeName);
        Window.Location.replace(builder.buildString());
      } else {
        // If we are using only cookies, just reload
        Window.Location.reload();
      }
    }

    public void setLocale(String nativeName) {
      localeName = nativeName;
    }
  }

  private class SaveAction implements Command {
    @Override
    public void execute() {
      ProjectRootNode projectRootNode = Ode.getInstance().getCurrentYoungAndroidProjectRootNode();
      if (projectRootNode != null) {
        ChainableCommand cmd = new SaveAllEditorsCommand(null);
        cmd.startExecuteChain(Tracking.PROJECT_ACTION_SAVE_YA, projectRootNode);
      }
    }
  }

}
