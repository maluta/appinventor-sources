// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/app-inventor/master/mitlicense.txt

package com.google.appinventor.client.widgets;

import com.google.gwt.user.client.ui.PushButton;
import com.google.gwt.user.client.ui.Image;

/**
 * A PushButton that has a specific style.
 *
 * @author lizlooney@google.com (Liz Looney)
 */
public class TextButton extends PushButton {
  public TextButton(String caption) {
    super(caption);
    setStylePrimaryName("ode-TextButton");
  }

  public TextButton(Image image) {
    super(image);
    setStylePrimaryName("ode-TextButton");
  }
}
