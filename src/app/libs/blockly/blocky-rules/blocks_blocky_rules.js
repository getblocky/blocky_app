Blockly.Blocks['blocky_trigger_device'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When device")
        .appendField(new Blockly.FieldDropdown([["registered","R"], ["connected","C"], ["disconnected","D"]]), "trigger_device");
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
        .appendField("When receive topic")
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
        .appendField("When every")
        .appendField(new Blockly.FieldNumber(0, 1), "trigger_interval_amount")
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
        .appendField("When every Sun")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_sun")
        .appendField("Mon")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_mon")
        .appendField("Tue")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_tue")
        .appendField("Wed")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_wed")
        .appendField("Thu")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_thu")
        .appendField("Fri")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_fri")
        .appendField("Sat")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "trigger_schedule_day_sat")
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

Blockly.Blocks['blocky_data_device_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is device")
        .appendField(new Blockly.FieldDropdown([["online","on"], ["offline","off"]]), "data_device_state");
    this.setOutput(true, "actions");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_action_sms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send message")
        .appendField(new Blockly.FieldTextInput("message"), "action_sms_message")
        .appendField("to number")
        .appendField(new Blockly.FieldTextInput("number"), "action_sms_number");
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_action_email'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send message")
        .appendField(new Blockly.FieldTextInput("message"), "action_email_message")
        .appendField("to email")
        .appendField(new Blockly.FieldTextInput("email"), "action_email_email");
    this.setPreviousStatement(true, "actions");
    this.setNextStatement(true, "actions");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blocky_action_mqtt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send message")
        .appendField(new Blockly.FieldTextInput("message"), "action_mqtt_message")
        .appendField("to topic")
        .appendField(new Blockly.FieldTextInput("topic"), "action_mqtt_topic");
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