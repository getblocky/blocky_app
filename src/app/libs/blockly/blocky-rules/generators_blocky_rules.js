/* eslint-disable */

Blockly.JavaScript['blocky_trigger_device'] = function (block) {
  var dropdown_trigger_device = block.getFieldValue('trigger_device');
  var code = '';
  if (dropdown_trigger_device === 'C') {
    code = 'triggers.push({type: "trigger.device.connect"});\n';
  } else if (dropdown_trigger_device === 'D') {
    code = 'triggers.push({type: "trigger.device.disconnect"});\n';
  }
  return code;
};

Blockly.JavaScript['blocky_trigger_mqtt'] = function (block) {
  var code = '';
  var text_trigger_topic = block.getFieldValue('trigger_topic').trim();
  if (text_trigger_topic.length) {
    code = 'triggers.push({type: "trigger.mqtt", configuration: {topic: "' + text_trigger_topic + '"}});\n';
  }
  return code;
};

Blockly.JavaScript['blocky_timer_interval'] = function(block) {
  var number_trigger_interval_amount = block.getFieldValue('trigger_interval_amount');
  var dropdown_trigger_interval_unit = block.getFieldValue('trigger_interval_unit');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
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
  var code = '\n';
  return code;
};

Blockly.JavaScript['blocky_data_mqtt'] = function(block) {
  var text_data_topic = block.getFieldValue('data_topic');
  var variable_data_message = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('data_message'), Blockly.Variables.NAME_TYPE);
  var dropdown_data_message_type = block.getFieldValue('data_message_type');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['blocky_action_email'] = function(block) {
  var value_action_email_address = Blockly.JavaScript.valueToCode(block, 'action_email_address', Blockly.JavaScript.ORDER_ATOMIC).trim();
  var value_action_email_subject = Blockly.JavaScript.valueToCode(block, 'action_email_subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_email_message = Blockly.JavaScript.valueToCode(block, 'action_email_message', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';
  if (value_action_email_address.length) {
    var code = 'blocky_send_mail(' + value_action_email_address + ', ' + value_action_email_subject + ', ' + value_action_email_message + ');\n';
  }
  return code;
};

Blockly.JavaScript['blocky_action_mqtt'] = function(block) {
  var value_action_mqtt_topic = Blockly.JavaScript.valueToCode(block, 'action_mqtt_topic', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_mqtt_message = Blockly.JavaScript.valueToCode(block, 'action_mqtt_message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['blocky_triggers_actions'] = function(block) {
  var statements_rule_triggers = Blockly.JavaScript.statementToCode(block, 'rule_triggers');
  var statements_rule_actions = Blockly.JavaScript.statementToCode(block, 'rule_actions');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['blocky_triggers_actions'] = function (block) {
  var statements_rule_triggers = Blockly.JavaScript.statementToCode(block, 'rule_triggers');
  var statements_rule_actions = Blockly.JavaScript.statementToCode(block, 'rule_actions');
  // TODO: Assemble JavaScript into code variable.
  var blocky_triggers = 'function blocky_triggers() {\n' +
    'var triggers = [];\n' + statements_rule_triggers + 'return triggers;\n}';

  var blocky_actions = 'function blocky_actions(blocky_device_name) {\n' +
    statements_rule_actions + '}';

  var code = blocky_triggers + '\n' + blocky_actions + '\n';
  return code;
};