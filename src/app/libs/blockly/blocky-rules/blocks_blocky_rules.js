/* eslint-disable */

Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "when";

Blockly.Blocks['blocky_trigger_device'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("device")
        .appendField(new Blockly.FieldDropdown([["connected","C"], ["disconnected","D"]]), "trigger_device");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_trigger_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("receiving message from")
        .appendField(new Blockly.FieldTextInput("topic"), "trigger_topic");
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_data_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("value of message from topic")
        .appendField(new Blockly.FieldTextInput("topic"), "data_topic");
    this.setOutput(true, ["String", "Number"]);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_action_email'] = {
  init: function() {
    this.appendValueInput("action_email_address")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("send email to");
    this.appendValueInput("action_email_subject")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("subject");
    this.appendValueInput("action_email_message")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("message");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_action_mqtt'] = {
  init: function() {
    this.appendValueInput("action_mqtt_topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("send message to");
    this.appendValueInput("action_mqtt_message")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("message");
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_data_device_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name of device");
    this.setOutput(true, "String");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_actions'] = {
  init: function() {
    this.appendStatementInput("rule_actions")
        .setCheck("actions")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("actions");
    this.setOutput(true, "actions");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_triggers'] = {
  init: function() {
    this.appendValueInput("rule_triggers")
        .setCheck(null)
        .appendField("Triggers");
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_logic'] = {
  init: function() {
    this.appendValueInput("rule_logic")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Logic");
    this.setPreviousStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
