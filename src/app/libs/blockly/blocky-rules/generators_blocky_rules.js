Blockly.JavaScript['blocky_trigger_device'] = function(block) {
  var dropdown_trigger_device = block.getFieldValue('trigger_device');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_trigger_mqtt'] = function(block) {
  var text_trigger_topic = block.getFieldValue('trigger_topic');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_timer_interval'] = function(block) {
  var number_trigger_interval_amount = block.getFieldValue('trigger_interval_amount');
  var dropdown_trigger_interval_unit = block.getFieldValue('trigger_interval_unit');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_trigger_timer_schedule'] = function(block) {
  var checkbox_trigger_schedule_day_sun = block.getFieldValue('trigger_schedule_day_sun') == 'TRUE';
  var checkbox_trigger_schedule_day_mon = block.getFieldValue('trigger_schedule_day_mon') == 'TRUE';
  var checkbox_trigger_schedule_day_tue = block.getFieldValue('trigger_schedule_day_tue') == 'TRUE';
  var checkbox_trigger_schedule_day_wed = block.getFieldValue('trigger_schedule_day_wed') == 'TRUE';
  var checkbox_trigger_schedule_day_thu = block.getFieldValue('trigger_schedule_day_thu') == 'TRUE';
  var checkbox_trigger_schedule_day_fri = block.getFieldValue('trigger_schedule_day_fri') == 'TRUE';
  var checkbox_trigger_schedule_day_sat = block.getFieldValue('trigger_schedule_day_sat') == 'TRUE';
  var text_trigger_schedule_time = block.getFieldValue('trigger_schedule_time');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_data_mqtt'] = function(block) {
  var text_data_topic = block.getFieldValue('data_topic');
  var variable_data_message = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('data_message'), Blockly.Variables.NAME_TYPE);
  var dropdown_data_message_type = block.getFieldValue('data_message_type');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_data_device_state'] = function(block) {
  var dropdown_data_device_state = block.getFieldValue('data_device_state');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_action_sms'] = function(block) {
  var text_action_sms_message = block.getFieldValue('action_sms_message');
  var text_action_sms_number = block.getFieldValue('action_sms_number');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_action_email'] = function(block) {
  var text_action_email_message = block.getFieldValue('action_email_message');
  var text_action_email_email = block.getFieldValue('action_email_email');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_action_mqtt'] = function(block) {
  var text_action_mqtt_message = block.getFieldValue('action_mqtt_message');
  var text_action_mqtt_topic = block.getFieldValue('action_mqtt_topic');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blocky_triggers_actions'] = function(block) {
  var statements_rule_triggers = Blockly.JavaScript.statementToCode(block, 'rule_triggers');
  var statements_rule_actions = Blockly.JavaScript.statementToCode(block, 'rule_actions');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};