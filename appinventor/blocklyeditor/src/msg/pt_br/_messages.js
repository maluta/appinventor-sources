// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Brazilian (Portuguese) strings.
 * @author tiago.maluta@gmail.com (Tiago Maluta)
 * @author Programae@fundacaolemann.org.br (Programaê!)
 */
'use strict';

goog.provide('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.pt_br_switch_language_to_portuguese_br = {
  // Switch language to English.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.DUPLICATE_BLOCK = 'Duplicar';
    Blockly.Msg.REMOVE_COMMENT = 'Remover Comentário';
    Blockly.Msg.ADD_COMMENT = 'Adicionar Comentário';
    Blockly.Msg.EXTERNAL_INPUTS = 'Entradas Externas';
    Blockly.Msg.INLINE_INPUTS = 'Entradas Embutidas';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Organizar Parâmetetros Horizontalmente';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Organizar Parâmetetros Verticalmente';
    Blockly.Msg.DELETE_BLOCK = 'Excluir Blocos';
    Blockly.Msg.DELETE_X_BLOCKS = 'Excluir %1 Blocos';
    Blockly.Msg.COLLAPSE_BLOCK = 'Fechar Bloco';
    Blockly.Msg.EXPAND_BLOCK = 'Expandir Bloco';
    Blockly.Msg.DISABLE_BLOCK = 'Desabilitar Bloco';
    Blockly.Msg.ENABLE_BLOCK = 'Habilitar Bloco';
    Blockly.Msg.HELP = 'Ajuda';
    Blockly.Msg.COLLAPSE_ALL = 'Fechar Blocos';
    Blockly.Msg.EXPAND_ALL = 'Expandir Blocos';
    Blockly.Msg.ARRANGE_H = 'Organizar Blocos Horizontalmente';
    Blockly.Msg.ARRANGE_V = 'Organizar Blocos Verticalmente';
    Blockly.Msg.ARRANGE_S = 'Organizar Blocos Diagonalmente';
    Blockly.Msg.SORT_W = 'Organizar Blocos por Largura';
    Blockly.Msg.SORT_H = 'Organizar Blocos por Altura';
    Blockly.Msg.SORT_C = 'Organizar Blocos por Categoria';

// Variable renaming.
    Blockly.MSG_CHANGE_VALUE_TITLE = 'Alterar o valor:';
    Blockly.MSG_NEW_VARIABLE = 'Nova variável...';
    Blockly.MSG_NEW_VARIABLE_TITLE = 'Nome da nova variável:';
    Blockly.MSG_RENAME_VARIABLE = 'Renomear variável...';
    Blockly.MSG_RENAME_VARIABLE_TITLE = 'Renomear todas as "%1" variáveis como:';

// Toolbox.
    Blockly.MSG_VARIABLE_CATEGORY = 'Variáveis';
    Blockly.MSG_PROCEDURE_CATEGORY = 'Procedimentos';

// Warnings/Errors
    Blockly.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "Este bloco não pode ser usado em uma definição";
    Blockly.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Selecione um item válido no menu suspenso.";
    Blockly.ERROR_DUPLICATE_EVENT_HANDLER = "Este é um manipulador de eventos duplicado para este componente.";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Clique no quadrado para escolher uma cor.';
    Blockly.Msg.LANG_COLOUR_BLACK = 'preto';
    Blockly.Msg.LANG_COLOUR_WHITE = 'branco';
    Blockly.Msg.LANG_COLOUR_RED = 'vermelho';
    Blockly.Msg.LANG_COLOUR_PINK = 'rosa';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'laranja';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'amarelo';
    Blockly.Msg.LANG_COLOUR_GREEN = 'verde';
    Blockly.Msg.LANG_COLOUR_CYAN = 'ciano';
    Blockly.Msg.LANG_COLOUR_BLUE = 'azul';
    Blockly.Msg.LANG_COLOUR_MAGENTA = 'magenta';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'cinza claro';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'cinza escuro';
    Blockly.Msg.LANG_COLOUR_GRAY = 'cinza';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'separar cor';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "Uma lista de quatro elementos, cada um dentro de uma faixa de 0 a 255, representando os componentes vermelho, verde, azul e alfa.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'fazer cor';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Uma cor com os componentes vermelho, verde, azul, e, opcionalmente, alfa predefinidos";

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Controle';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Se um valor é verdadeiro, siga algumas instruções.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Se um valor é verdadeiro, execute o primeiro bloco de instruções.\n' +
        'Senão, execute o segundo bloco de instruções.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Se o primeiro valor for verdadeiro, execute o primeiro bloco de instruções.\n' +
        'Senão, se o segundo valor for verdadeiro, execute o segundo bloco de instruções.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Se o primeiro valor for verdadeiro, execute o primeiro bloco de instruções.\n' +
        'Senão, se o segundo valor for verdadeiro, execute o segundo bloco de instruções.\n' +
        'Se nenhum dos valores for verdadeiro, execute o último bloco de instruções.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'else';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'then';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'if';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Adicionar, remover ou reorganizar seções\n' +
        'para reconfigurar este bloco if.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Adicionar uma condição ao bloco if.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Adicionar uma condição final e geral ao bloco if.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repita';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Enquanto um valor for verdadeiro, realize algumas instruções.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Enquanto um valor for falso, realize algumas instruções.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Executa os blocos na seção \'do\' enquanto o teste for '
        + 'true.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'conte com';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'de';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'até';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'do';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Conta de um número incial até um número final.\n' +
        'Para cada contagem, defina o número atual do contador como\n' +
        'variável "%1", e então realize algumas instruções.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'for each';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'número';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'de';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'até';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'por';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'for número no intervalo';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'for ';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' no intervalo';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Executa os blocos na seção \'do\' para cada número '
        + 'valor no intervalo do começo até o fim, passando em um valor por vez.  Use o nome '
        + 'da variável dada para se referir ao valor atual.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'para cada';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'item';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'na lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'para o item na lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'para  ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' na lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Executa os blocos na seção \'do\'  para cada item '
        + 'na lista.  Use o nome da variável dada para se referir ao item atual da lista.';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'de loop';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'interrompa';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue com a próxima iteração';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Interrompa o conteúdo do loop.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Pule o resto do loop, e\n' +
        'continue com a próxima iteração.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Aviso:\n' +
        'Esse bloco só deve\n' +
        'ser usado dentro de um loop.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'teste';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Executa os blocos na seção \'do\' enquanto o teste for '
        + 'true.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'if'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'then';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'else';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'if';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Se a condição testada for verdadeira,'
        + 'retorne o resultado da avaliação da expressão anexada ao slot \'then-return\';'
        + 'caso contrário, retorne o resultado da avaliação da expressão anexada ao slot \'else-return\';'
        + 'no máximo uma das expressões de retorno vai ser avaliada.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'resultado';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Executa os blocos em \'do\' e retorna uma instrução. Isso é útil se você precisar executar um procedimento antes de retornar um valor para a variável.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'do/resultado';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'do resultado';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'calcule, mas ignore o resultado'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'calcule, mas ignore'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Executar o bloco de código conectado e ignorar o valor de retorno (se houver). Isso é útil se houver a necessidade de chamar um procedimento com um valor de retorno, mas o valor não é necessário.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'nada';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Não há retorno. Usado para inicializar as variáveis, ou pode ser conectado a um socket de retorno se não houver a necessidade de um valor de retorno. É equivalente a null ou None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'abre outra tela';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'abre a tela';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Abre uma nova tela em um aplicativo de múltiplas telas.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'abre outra tela com o valor inicial';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'startValue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'abre a tela com o valor'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Abre uma nova tela em um aplicativo de múltiplas telas e passa o '
        + 'valor inicial para essa tela.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'obter valor inicial';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'startValue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'obter valor inicial';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Retorna o valor que foi passado para a tela quando ela '
        + 'foi aberta, normalmente por outra tela em um aplicativo de várias telas. Se nenhum valor foi '
        + 'passado, retorna o texto vazio.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'fechar tela';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'fechar tela';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Fechar a tela atual';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'fechar tela com valor';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'resultado';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'fechar tela com o valor';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Fecha a tela atual e retorna o resultado para a '
        + 'tela que a abriu.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'fechar aplicação';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'fechar aplicação';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Fecha todas as telas nesta aplicação e para a aplicação.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'obter texto inicial sem formatação';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'obter texto inicial sem formatação';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Rertorna o texto sem formatação que foi passado para esta tela quando '
        + 'ela foi iniciada por outra aplicação. Se nenhm valor foi passado, retorna o texto vazio. Para '
        + 'aplicações com várias telas, use obter valor inicial ao invés de obter texto inicial sem formatação.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'fechar tela com texto sem formatação';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'fechar tela com texto sem formatação';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Fecha a tela atual e retorna o texto à aplicação que '
        + 'a abriu. Para aplicações de várias telas, use fechar tela com valor, ao invés de '
        + 'fechar tela com texto sem formatação.';



// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Lógica';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Testa se duas coisas são iguais. \n' +
        'As coisas comparadas podem ser quaisquer coisas, não somente números.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Retorna true se as entradas não forem iguais.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'operador lógico igual';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'e';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'ou';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Retorna true se todas as entradas forem verdadeiras.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Retorna se alguma entrada for verdadeira.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Retorna true se a entrada for falsa.\n' +
        'Retorna false se a entrada for verdadeira.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Retorna o valor booleano verdadeiro.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Retorna o valor booleano falso.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Matemática';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Reporta o número mostrado.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'número';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Retorna true se os números forem iguais.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Retorna true se os números não forem iguais.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Retorna true se o primeiro número for menor\n' +
        'que o segundo número.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Retorna true se o primeiro número for menor\n' +
        'ou igual ao segundo número.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Retorna true se o primeiro número for maior\n' +
        'que o segundo número.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Retorna true se o primeiro número for maior\n' +
        'ou igual ao segundo número.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#exponent';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Retorna a soma de dois números.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Retorna a diferença entre dois números.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Retorna o produto de dois números.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Retorna o quociente de dois números.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Retorna o primeiro número elevado à\n' +
        'potência do segundo número.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'alterar';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'por';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Adicionar um número à variável "%1".';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'raiz quadrada';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'módulo';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Retorna a raiz quadrada de um número.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Retorna o valor absoluto de um número.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Retorna a negação de um número.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Retorna o logaritmo de um número.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='http://appinventor.mit.edu/explore/ai2/support/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Retorna e elevado a potência de um número.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='http://appinventor.mit.edu/explore/ai2/support/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Retorna 10 elevado a potência de um número.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Arredonda um número para cima ou para baixo.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Arredonda a entrada para o menor\n' +
        'número que não seja menor que a entrada';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'http://appinventor.mit.edu/explore/ai2/support/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Arredonda a entrada para o maior\n' +
        'número que não seja maior que a entrada';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'http://appinventor.mit.edu/explore/ai2/support/blocks/math#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'arredondar';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'teto';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'piso';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'sen';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asen';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Fornece o seno do ângulo dado em graus.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Fornece o cosseno do ângulo dado em graus.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Fornece a tangente do ângulo dado em graus.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Fornece o ângulo no intervalo entre (-90,+90]\n' +
        'graus com o valor do seno dado.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Fornece o ângulo no intervalo entre [0, 180)\n' +
        'graus com o valor do cosseno dado.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Fornece o ângulo no intervalo entre (-90, +90)\n' +
        'graus com o valor da tangente dado.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Fornece o ângulo no intervalo entre (-180, +180]\n' +
        'graus com as dadas coordenadas retangulares.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
//TODO: I don't think any of this is useful anymore...Delete?
    /*Blockly.Msg.LANG_MATH_ONLIST_HELPURL = '';
     Blockly.Msg.LANG_MATH_ONLIST_INPUT_OFLIST = 'da lista';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_SUM = 'soma';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'média';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'mediana';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MODE = 'moda';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'desvio padrão';
     Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'item aleatório';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Retorna a soma de todos os números da lista.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Retorna o menor dos argumentos.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Retorna o maior dos argumentos.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Retorna a média aritmética da lista.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Retorna a mediana da lista.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Retorna uma lista do(s) item(s) mais comuns da lista.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Retorna o desvio padrão da lista.';
     Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Retorna um elemento aleatório da lista.';

     Blockly.Msg.LANG_MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
     Blockly.Msg.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'restringir';
     Blockly.Msg.LANG_MATH_CONSTRAIN_INPUT_LOW = 'entre (baixo)';
     Blockly.Msg.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'e (alto)';
     Blockly.Msg.LANG_MATH_CONSTRAIN_TOOLTIP = 'Restringe um número entre os limites especificados (inclusive).';*/


    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'módulo de';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'resto de';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quociente de';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Retorna o módulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Retorna o resto.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Retorna o quociente.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'inteiro aleatório';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'de';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'até';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'inteiro aleatório de %1 até %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Retorna um inteiro aleatório entre o limite superior\n' +
        'e o limite inferior. Os limites vão ser menores \n' +
        'que  2**30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'fração aleatória';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Retorna um número aleatório entre 0 e 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'define semente aleatória';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'para';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'especifica uma semente numérica\n' +
        'para o gerador numérico aleatório';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'converter';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radianos para graus';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'graus para radianos';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Retorna o valor em graus no intervalo\n' +
        '[0, 360) que corresponde ao argumento em radianos.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Retorna o valor em radianos no intervalo\n' +
        '[-\u03C0, +\u03C0) que corresponde ao argumento em graus.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'formatar como decimal';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'número';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'casas';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'formatar como número decimal %1 casas %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Retorna o número formatado como um decimal\n' +
        'com um número especificado de casas.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'é um número?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Testa se alguma coisa é um número.';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Texto';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Uma string de texto.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'criar texto com';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Concatena todas as entradas para formar uma única string de texto.\n'
        + 'Se não houver entradas, crie um texto vazio.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'join';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'string';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'para';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'concatenar texto';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Concatena algum texto à variável "%1".';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'comprimento';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Retorna o número de letras (incluindo espaços)\n' +
        'no texto dado.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'está vazio';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Retorna true se o comprimento do\n' + 'texto for 0, e false caso contrário.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'comparar textos';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Testa se o text1 é lexicograficamente menor que text2.\n'
        + 'se um texto for o prefixo do outro, o menor texto é\n'
        + 'considerado menor. Caracteres em letra maiúscula precedem caracteres em letra minúscula.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Testa se as strings de texto são idênticas, ie., têm os mesmos\n'
        + 'caracteres na mesma ordem. Isso é diferente do =\n'
        + 'comum, no caso em que as strings são números: 123 e 0123 são =\n'
        + 'mas não texto =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Reporta se text1 é lexicograficamente maior que text2.\n'
        + 'se um texto é o prefixo do outro, o texto mais curto é considerado menor.\n'
        + 'Caracteres em letra maiúscula precedem caracteres em letra minúscula.';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letras no texto';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Retorna um número específico de letras no começo ou no final do texto.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'primeira';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'última';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'encontrar';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'ocorrência do texto';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'no texto';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Retorna o índice da primeira/última ocorrência\n' +
     'do primeiro texto no segundo texto.\n' +
     'Retorna 0 se o texto não for encontrado.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'primeira';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'última';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letra em';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'no texto';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Retorna a letra na posição específica.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'letra maiúscula';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'letra minúscula';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Retorna uma cópia da string de texto passada como argumento convertida para letras maiúsculas.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Retorna uma cópia da string de texto passada como argumento convertida para letras minúsculas.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trim';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Retorna uma cópia da string de texto passada como argumento com quaisquer\n'
        + 'espaços, à direita ou à esquerda, removidos.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'começa em';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'parte';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'começa em texto %1 parte %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Retorna o índice inicial da parte no texto.\n'
        + 'onde o índice 1 denota o começo do texto. Retorna 0 se a\n'
        + 'parte não estiver no texto.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'contém';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'parte';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'contém texto %1 parte %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Testa se a parte está contida no texto.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'em';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'na (lista)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'dividir no primeiro';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'dividir no primeiro de qualquer';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'dividir';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'dividir em qualquer';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Divide o texto dado em duas partes usando a posição da primeira ocorrência do \n'
        + 'texto \'em\' como ponto de divisão, e retorna uma lista de dois itens contendo a parte \n'
        + 'antes do ponto de divisão, e a parte depois do ponto de divisão. \n'
        + 'Dividir "maçã,banana,cereja,ração" com uma vírgula como ponto de separação \n'
        + 'retorna uma lista de dois itens: a primeira é o texto "maçã" e a segunda é o texto \n'
        + '"banana,cereja,ração". \n'
        + 'Perceba que a vírgula depois de "maçã" não aparece no resultado, \n'
        + 'porque ela é o ponto de divisão.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Divide o texto dado em uma lista de dois itens, usando a primeira posição de qualquer item\n'
        + 'na lista \'em\' como ponto de divisão. \n\n'
        + 'Dividir "Eu amo maçãs bananas maçãs uvas" pela lista "(ba,ma)" retorna \n'
        + 'uma lista de dois itens, sendo o primeiro "Eu amo" e o segundo \n'
        + '"çãs bananas çãs uvas."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divide o texto em partes usando o texto \'em\' como os pontos de divisão, e produz uma lista de resultados.  \n'
        + 'Dividir "um,dois,três,quatro" na "," (vírgula) retorna a lista"(um dois três quatro)". \n'
        + 'Dividir "um-batata,dois-batatas,três-batatas,quatro" em "-batata", retorna a lista "(um dois três quatro)".'
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divide o texto dado em uma lista, usando qualquer um dos itens na lista \'em\' como o \n'
        + 'ponto de divisão, e retorna uma lista de resultados. \n'
        + 'Dividir "maçãfruta,banana,fruta,ração" com \'em\' como a lista de dois elementos cujo \n'
        + 'primeiro item é uma vírgula e o segundo item é "uta" retorna uma lista de quatro itens: \n'
        + '"(maçãfr banana fr ração)".'
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'imprimir';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Imprime o texto especificado, número, ou outro valor.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'pedir para';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'com a mensagem';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Pedir para o usuário entrar com o texto específico.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'texto';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'número';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'dividir em espaços';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Divide o texto em partes separadas por espaços.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segmento';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'iniciar';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'comprimento';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segmento texto %1 começa %2 comprimento %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Extrai o segmento com comprimento determinado do texto dado\n'
        + 'começando no texto dado a partir da posição dada. Posição\n'
        + '1 denota o começo do texto.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segmento';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'substituir tudo';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'substituição';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'substituir tudo texto %1 segmento %2 substituição %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Retorna um novo texto obtido através da substituição de todas as ocorrências\n'
        + 'do segmento com a substituição.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Listas';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'criar lista vazia';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Retorna uma lista, de comprimento 0, que não contém dados';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'criar uma lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Cria uma lista com qualquer número de itens.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Adicionar, remover, ou reordenar seções para reconfigurar este bloco da lista.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Adiciona um item à lista.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Adiciona um item à lista.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'selecionar item da lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'índice';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'selecionar item da lista  lista %1 índice %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Retorna o item na posição determinada pelo índice na lista.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'isso é uma lista?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'coisa';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'está na lista? coisa %1 lista %2'
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Retorna true se a coisa for um item da lista, e '
        + 'false se não for.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'índice na lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'coisa';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'índice na lista coisa %1 lista %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Encontra a posição da coisa na lista. Se ela não estiver '
        + 'na lista, retorna 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'escolher um item aleatório';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Escolhe um item da lista aleatoriamente.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'substituir item da lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'índice';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'substituição';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'substituir item da lista  lista %1 índice %2 substituição %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Substitui o n-ésimo item de uma lista.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'remover item da lista';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'índice';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'remover item da lista  lista %1 índice %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Remove o item na posição específica da lista.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'criar lista com item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repetido';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'vezes';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Cria uma lista com o valor dado\n' +
     'repetido pelo número específico de vezes.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'comprimento da lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'comprimento da lista lista %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Conta o número de itens de uma lista.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'concatenar à lista';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'lista1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'lista2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'concatenar à lista  lista1 %1 lista2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Concatena todos os itens da lista2 ao final da lista1. Após '
        + 'a concatenação, a lista1 vai incluir esses elementos adicionais, mas a lista2 permanecerá inalterada.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'adicionar itens à lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'adicionar itens à lista lista %1 item %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Adiciona itens ao final de uma lista.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Adiciona, remove, ou reordena seções para reconfigurar este bloco da lista.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copiar lista';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Faz uma cópia da lista, incluindo a cópia de todas as sublistas';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'é uma lista?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'coisa';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Testa se alguma coisa é uma lista.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'lista para linha csv';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interpreta a lista como uma linha de uma tabela e retorna um texto '
        + '\(valor separado por vírgula\) CVS representando a linha. Cada item na linha da lista é '
        + 'considerado um campo, e fica entre aspas duplas no texto CVS obtido como resultado. '
        + 'Os itens são separados por vírgula. O texto da linha retornada não tem um separador de linha no '
        + 'final.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'lista da linha csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Analista um texto como uma linha CSV \(valor separado por vírgula\) '
        + 'formatada para produzir uma lista de campos. Há um erro se o texto da linha tiver linhas '
        + 'dentro dos campos \(efetivamente, várias linhas\). Tudo bem se o texto da linha '
        + 'terminar em uma única linha nova ou CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'lista para tabela csv';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interpreta a lista como uma tabela no formato de linha e '
        + 'retorna um texto CSV \(valor separado por vírgula\) que representa a tabela. Cada item da lista '
        + 'deve ser uma lista que representa uma linha de uma tabela CSV. Cada item na lista '
        + 'de linhas é considerado um campo, e fica entre aspas duplas no texto CSV '
        + 'resultante. No texto retornado, os itens nas linhas são separados por vírgulas, e as linhas são '
        + 'separadas por CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'lista de uma tabela csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'texto';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Analisa um texto como uma tabela CSV \(valor separado por vírgula\) '
        + 'para produzir uma lista de linhas, sendo cada uma delas uma lista de campos. As linhas podem ser '
        + 'separadas por novas linhas \(\\n\) ou CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'inserir item da lista';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'índice';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'inserir item da lista lista %1 índice %2 item %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Insere um item em uma lista na posição especificada.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'a lista está vazia?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Retorna true se a lista estiver vazia.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'busca em pares';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'chave';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pares';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'notFound';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'busca em pares  chave %1 pares %2 notFound %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Retorna o valor associado à chave na lista de pares';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'encontrar';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'ocorrência do item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'na lista';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Retorna o índice da primeira/última ocorrência\n' +
     'do item na lista.\n' +
     'Retorna 0 se o texto não for encontrado.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'primeira';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'última';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'obter item em';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'na lista';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Retorna o valor na posição específica de uma lista.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'definir item em';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'na lista';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'para';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Define o valor na posição específica de uma lista.';*/

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'inicializar global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'para';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Cria uma variával global e atribui a ela o valor dos blocos anexados.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'get';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'get';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Retorna o valor desta variável.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'set';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'para';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'set';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Define que esta variável seja igual à entrada.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' variável';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'inicializar local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'para';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'em';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Permite que você crie variáveis que somente são acessíveis na parte da instrução do deste bloco.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'inicializar localmente em do';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'inicializar local';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'nome';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'para';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'em';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Permite que você crie variáveis que são acessíveis somente na parte do retorno deste bloco.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'inicializar local no retorno';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'nomes locais';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'para';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedimento';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'para ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Um procedimento que não retorna um valor.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'resultado';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'do';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'resultado';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Executa os blocos em \'do\' e retorna uma instrução. Isso é útil se você precisar executar um procedimento antes de retornar um valor para uma variável.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'do/resultado';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'para';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'para ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Um procedimento que retorna um valor como resultado.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Aviso:\n' +
        'Esse procedimento tem\n' +
        'entradas duplicadas.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'chamar ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedimento';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'chamar ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Chama um procedimento sem valor de retorno.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'chamar sem retorno';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'chamar ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Chama um procedimento com um valor de retorno.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'chamar retorno';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'entradas';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'entrada:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Destacar procedimento';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'when ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'do';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'chamar ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'chamar ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'para o componente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'de componente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'set ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' para';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'set ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' para';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'de componente';


///////////////////
    /* HelpURLs for Component Blocks */

//User Interface Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = '/reference/components/userinterface.html#Button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = '/reference/components/userinterface.html#buttonproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = '/reference/components/userinterface.html#buttonevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = '/reference/components/userinterface.html#CheckBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#checkboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#checkboxevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = '/reference/components/userinterface.html#Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = '/reference/components/userinterface.html#clockproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = '/reference/components/userinterface.html#clockevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = '/reference/components/userinterface.html#clockmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = '/reference/components/userinterface.html#Image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = '/reference/components/userinterface.html#imageproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = '/reference/components/userinterface.html#imageevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = '/reference/components/userinterface.html#imagemethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = '/reference/components/userinterface.html#Label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = '/reference/components/userinterface.html#labelproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = '/reference/components/userinterface.html#labelevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = '/reference/components/userinterface.html#labelmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = '/reference/components/userinterface.html#ListPicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#listpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = '/reference/components/userinterface.html#listpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = '/reference/components/userinterface.html#listpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = "/reference/components/userinterface.html#Notifier";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#notifierproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = '/reference/components/userinterface.html#notifierevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = '/reference/components/userinterface.html#notifiermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#pwdboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#pwdboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#pwdboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = '/reference/components/userinterface.html#Screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = '/reference/components/userinterface.html#screenproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = '/reference/components/userinterface.html#screenevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = '/reference/components/userinterface.html#screenmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = '/reference/components/userinterface.html#Slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#sliderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = '/reference/components/userinterface.html#sliderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = '/reference/components/userinterface.html#slidermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = '/reference/components/userinterface.html#TextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#textboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#textboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#textboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = "/reference/components/userinterface.html#WebViewer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#webviewerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = '/reference/components/userinterface.html#webviewerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = '/reference/components/userinterface.html#webviewermethods';

//Layout components
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = "/reference/components/layout.html#HorizontalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#horizarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = "/reference/components/layout.html#VerticalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#vertarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = "/reference/components/layout.html#TableArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#tablearrangeproperties';

//Media components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = '/reference/components/media.html#Camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = '/reference/components/media.html#camcorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = '/reference/components/media.html#camcorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = '/reference/components/media.html#camcordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = '/reference/components/media.html#Camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = '/reference/components/media.html#cameraproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = '/reference/components/media.html#cameraevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = '/reference/components/media.html#cameramethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = '/reference/components/media.html#ImagePicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = '/reference/components/media.html#imagepickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = '/reference/components/media.html#imagepickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = '/reference/components/media.html#imagepickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = '/reference/components/media.html#Player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#playerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = '/reference/components/media.html#playerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = '/reference/components/media.html#playermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = '/reference/components/media.html#Sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = '/reference/components/media.html#soundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = '/reference/components/media.html#soundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = '/reference/components/media.html#soundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = "/reference/components/media.html#SoundRecorder";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = '/reference/components/media.html#soundrecorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = '/reference/components/media.html#soundrecorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = '/reference/components/media.html#soundrecordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = "/reference/components/media.html#SpeechRecognizer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = '/reference/components/media.html#speechrecognizerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = '/reference/components/media.html#speechrecognizerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = '/reference/components/media.html#speechrecognizermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = "/reference/components/media.html#TextToSpeech";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = '/reference/components/media.html#texttospeechproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = '/reference/components/media.html#texttospeechevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = '/reference/components/media.html#texttospeechmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = '/reference/components/media.html#VideoPlayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#videoplayerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = '/reference/components/media.html#videoplayerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = '/reference/components/media.html#videoplayermethods';

// Drawing and Animation components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = "/reference/components/animation.html#Ball";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = '/reference/components/animation.html#ballproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = '/reference/components/animation.html#ballevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = '/reference/components/animation.html#ballmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = '/reference/components/animation.html#Canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = '/reference/components/animation.html#canvasproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = '/reference/components/animation.html#canvasevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = '/reference/components/animation.html#canvasmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = "/reference/components/animation.html#ImageSprite";
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = '/reference/components/animation.html#imagespriteproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = '/reference/components/animation.html#imagespriteevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = '/reference/components/animation.html#imagespritemethods';

//Sensor components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = "/reference/components/sensor.html#AccelerometerSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = '/reference/components/sensor.html#accelerometersensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = '/reference/components/sensor.html#accelerometersensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = '/reference/components/sensor.html#accelerometersensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = "/reference/components/sensor.html#BarcodeScanner";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = '/reference/components/sensor.html#barcodescannerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = '/reference/components/sensor.html#barcodescannerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = '/reference/components/sensor.html#barcodescannermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = "/reference/components/sensor.html#LocationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensor.html#locationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensor.html#locationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = '/reference/components/sensor.html#locationsensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = "/reference/components/sensor.html#OrientationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensor.html#orientationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensor.html#orientationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = '/reference/components/sensor.html#orientationsensormethods';

//Social components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = "/reference/components/social.html#ContactPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#contactpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = '/reference/components/social.html#contactpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = '/reference/components/social.html#contactpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = "/reference/components/social.html#EmailPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#emailpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = '/reference/components/social.html#emailpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = '/reference/components/social.html#emailpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = "/reference/components/social.html#PhoneCall";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = '/reference/components/social.html#phonecallproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = '/reference/components/social.html#phonecallevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = '/reference/components/social.html#phonecallmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = "/reference/components/social.html#PhoneNumberPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#phonenumberpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = '/reference/components/social.html#phonenumberpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = '/reference/components/social.html#phonenumberpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = "/reference/components/social.html#Texting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = '/reference/components/social.html#textingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = '/reference/components/social.html#textingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = '/reference/components/social.html#textingmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = "/reference/components/social.html#Twitter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = '/reference/components/social.html#twitterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = '/reference/components/social.html#twitterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = '/reference/components/social.html#twittermethods';

//Storage Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = "/reference/components/storage.html#FusiontablesControl";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = '/reference/components/storage.html#fusiontablescontrolproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = '/reference/components/storage.html#fusiontablescontrolevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = '/reference/components/storage.html#fusiontablescontrolmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = '/reference/components/storage.html#TinyDB';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = '/reference/components/storage.html#tinydbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = '/reference/components/storage.html#tinydbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = '/reference/components/storage.html#tinydbmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = "/reference/components/storage.html#TinyWebDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = '/reference/components/storage.html#tinywebdbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = '/reference/components/storage.html#tinywebdbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = '/reference/components/storage.html#tinywebdbmethods';

//Connectivity components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = "/reference/components/connectivity.html#ActivityStarter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#activitystarterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = '/reference/components/connectivity.html#activitystarterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = '/reference/components/connectivity.html#activitystartermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = "/reference/components/connectivity.html#BluetoothClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = '/reference/components/connectivity.html#bluetoothclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = '/reference/components/connectivity.html#bluetoothclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = '/reference/components/connectivity.html#bluetoothclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = "/reference/components/connectivity.html#BluetoothServer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#bluetoothserverproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = '/reference/components/connectivity.html#bluetoothserverevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = '/reference/components/connectivity.html#bluetoothservermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = "/reference/components/connectivity.html#Web";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = '/reference/components/connectivity.html#webproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = '/reference/components/connectivity.html#webevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = '/reference/components/connectivity.html#webmethods';

//Lego mindstorms components
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = "/reference/components/legomindstorms.html#NxtDirectCommands";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtdirectproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtdirectmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = "/reference/components/legomindstorms.html#NxtColorSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtcolorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtcolorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtcolormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = "/reference/components/legomindstorms.html#NxtLightSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtlightproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtlightevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtlightmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = "/reference/components/legomindstorms.html#NxtSoundSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtsoundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtsoundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtsoundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = "/reference/components/legomindstorms.html#NxtTouchSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxttouchproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxttouchevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxttouchmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = "/reference/components/legomindstorms.html#NxtUltrasonicSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = "/reference/components/legomindstorms.html#NxtDrive";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtdriveproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtdrivemethods';

//Internal components
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = "/reference/components/internal.html#GameClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = '/reference/components/internal.html#gameclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = '/reference/components/internal.html#gameclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = '/reference/components/internal.html#gameclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = "/reference/components/internal.html#Voting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = '/reference/components/internal.html#votingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = '/reference/components/internal.html#votingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = '/reference/components/internal.html#votingmethods';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Mostrar avisos";
    Blockly.Msg.HIDE_WARNINGS = "Ocultar avisos";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Você deve preencher todos os encaixes com blocos";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Este bloco deve ser conectado a um bloco de evento ou a uma definição de procedimento";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Erro no Companion";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Erro de conexão de rede";
    Blockly.Msg.REPL_NETWORK_ERROR = "Erro de rede";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Erro de comunicação de rede com Companion.<br />Tente reiniciar o Companion e reconectar";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Verificação de versão do Companion";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Sua aplicação Companion está desatualizada. Clique em "OK" para iniciar a atualização. Veja seu/sua';
    Blockly.Msg.REPL_EMULATORS = "emulador";
    Blockly.Msg.REPL_DEVICES = "dispositivo";
    Blockly.Msg.REPL_APPROVE_UPDATE = " tela porque você precisa aprovar a atualização.";
    Blockly.Msg.REPL_NOT_NOW = "Agora não";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "O Companion que você está usando está desatualizado.<br/><br/>Essa versão do App Inventor deve ser usada com a versão do Companion";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Você está usando um Companion desatualizado. Você não precisa atualizar o Companion imediatamente, mas você deve considerar fazer a atualização em breve.";
    Blockly.Msg.REPL_DISMISS = "Descartar";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Atualização do Software";
    Blockly.Msg.REPL_OK_LOWER = "Ok";
    Blockly.Msg.REPL_GOT_IT = "Entendi";
    Blockly.Msg.REPL_UPDATE_INFO = 'A atualização está sendo instalada no seu dispositivo. Veja a tela do seu dispositivo (ou emulador) e aprove a instalação do software quando for pedido.<br /><br />IMPORTANTE: Quando a atualização terminar, escolha "FEITO" (não clique em "abrir"). Então, acesse o App Inventor em seu navegador, clique no menu "Conectar" e escolha "Reiniciar Conexão.';

    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Não foi possível enviar a atualização para o dispositivo/emulador";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Não foi possível carregar a atualização no servidor do App Inventor";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Não foi possível carregar a atualização no servidor do App Inventor (o servidor não está respondendo)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Estamos baixando a atualização do servidor do App Inventor, aguarde";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Erro de tempo de execução";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Nota:</i>&nbsp;Você não receberá outra notificação de erro por 5 segundos.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Conectando via cabo USB";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Iniciando o Emulador Android<br/>Aguarde: isso pode levar alguns minutos.";
    Blockly.Msg.REPL_CONNECTING = "Conectando...";
    Blockly.Msg.REPL_CANCEL = "Cancelar";
    Blockly.Msg.REPL_GIVE_UP = "Desistir";
    Blockly.Msg.REPL_KEEP_TRYING = "Continuar tentando";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Falha de conexão";
    Blockly.Msg.REPL_NO_START_EMULATOR = "Não foi possível iniciar o MIT AI Companion no emulador";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Conectado?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "O AI2 não conseguiu identificar seu dispositivo, verifique se o cabo está conectado e se os drivers estão corretos.";
    Blockly.Msg.REPL_HELPER_Q = "Assistente?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'O assistente do aiStarter parece não estar em execução<br /><a href="http://appinventor.mit.edu" target="_blank">Precisa de ajuda?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB conectado, aguardando ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " segundos para verificar se tudo está funcionando.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulador inciado, aguardando ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Iniciando a aplicação do Companion no telefone conectado.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Iniciando a aplicação do Companion no emulador.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Iniciando Companion, aguarde ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Verificando se o Companion foi iniciado....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Conectar ao Companion";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Falha ao conectar ao MIT AI2 Companion, tente novamente.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Seu código é";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Você tem certeza disso?";
    Blockly.Msg.REPL_FACTORY_RESET = 'Isso vai reiniciar seu emulador em seu estado "factory". Se você atualizou anteriormente o Companion instalado no emulador, você provavelmente vai ter que fazer isso de novo.';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Você tem certeza que quer deletar todos %1 dos blocos?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Gerar Yail";
    Blockly.Msg.DO_IT = "Fazer isso";
    Blockly.Msg.CAN_NOT_DO_IT = "Não é possível fazer isso";
    Blockly.Msg.CONNECT_TO_DO_IT = 'Você deve estar conectado ao companion ou emulador para "Fazer isso"';
  }
};

// Initalize language definition to Portuguese
Blockly.Msg.pt_br_switch_language_to_portuguese_br.init();
