/* eslint-disable */

Blockly.Blocks['blocky_trigger_device'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when a device")
        .appendField(new Blockly.FieldDropdown([["connected","C"], ["disconnected","D"]]), "trigger_device");
    this.setPreviousStatement(true, "triggers");
    this.setNextStatement(true, "triggers");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_trigger_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when receive a message from")
        .appendField(new Blockly.FieldTextInput("topic"), "trigger_topic");
    this.setPreviousStatement(true, "triggers");
    this.setNextStatement(true, "triggers");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_timer_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when every")
        .appendField(new Blockly.FieldNumber(30, 1), "trigger_interval_amount")
        .appendField(new Blockly.FieldDropdown([["minutes","M"], ["hours","H"], ["days","D"]]), "trigger_interval_unit");
    this.setPreviousStatement(true, "triggers");
    this.setNextStatement(true, "triggers");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_trigger_timer_schedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when every Sun")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_sun")
        .appendField("Mon")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_mon")
        .appendField("Tue")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_tue")
        .appendField("Wed")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_wed")
        .appendField("Thu")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_thu")
        .appendField("Fri")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_fri")
        .appendField("Sat")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "trigger_schedule_day_sat")
        .appendField("at")
        .appendField(new Blockly.FieldTextInput("HH:MM"), "trigger_schedule_time");
    this.setPreviousStatement(true, "triggers");
    this.setNextStatement(true, "triggers");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_data_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get topic")
        .appendField(new Blockly.FieldTextInput("topic"), "data_topic")
        .appendField(", save message to")
        .appendField(new Blockly.FieldVariable("message"), "data_message")
        .appendField("as")
        .appendField(new Blockly.FieldDropdown([["string","string"], ["number","number"]]), "data_message_type");
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
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
        .appendField("mesage");
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

Blockly.Blocks['blocky_triggers_actions'] = {
  init: function() {
    this.appendStatementInput("rule_triggers")
        .setCheck("triggers")
        .appendField("Triggers");
    this.appendStatementInput("rule_actions")
        .setCheck("actions")
        .appendField("Actions");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_data_device_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get name of connected/disconnected device,")
        .appendField("save the name to")
        .appendField(new Blockly.FieldVariable("device_name"), "data_device_name");
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
