/* eslint-disable */

Blockly.JavaScript['blocky_trigger_device'] = function (block) {
  var dropdown_trigger_device = block.getFieldValue('trigger_device');
  var code = '';
  if (dropdown_trigger_device === 'C') {
    code = '"device_register",';
  } else if (dropdown_trigger_device === 'D') {
    code = '"device_offline",';
  }
  return code;
};

Blockly.JavaScript['blocky_trigger_mqtt'] = function (block) {
  var code = '';
  var text_trigger_topic = block.getFieldValue('trigger_topic').trim();
  if (text_trigger_topic.length) {
    code = '"mqtt_' + text_trigger_topic + '",';
  }
  return code;
};

Blockly.JavaScript['blocky_timer_interval'] = function (block) {
  var number_trigger_interval_amount = block.getFieldValue('trigger_interval_amount');
  var dropdown_trigger_interval_unit = block.getFieldValue('trigger_interval_unit');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['blocky_trigger_timer_schedule'] = function (block) {
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

Blockly.JavaScript['blocky_data_mqtt'] = function (block) {
  var text_data_topic = block.getFieldValue('data_topic');
  var dropdown_data_message_type = block.getFieldValue('data_message_type');
  var code = '';
  if (dropdown_data_message_type == 'number') {
    code = 'Number({{blocky_data_mqtt|' + text_data_topic + '}})';
  } else {
    code = 'String({{blocky_data_mqtt|' + text_data_topic + '}})';
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_action_email'] = function (block) {
  var value_action_email_address = Blockly.JavaScript.valueToCode(block, 'action_email_address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_email_subject = Blockly.JavaScript.valueToCode(block, 'action_email_subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_email_message = Blockly.JavaScript.valueToCode(block, 'action_email_message', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{"type": "action.email", "configuration": {"email": ' + value_action_email_address +
    ', "subject": ' + value_action_email_subject +
    ', "message": ' + value_action_email_message + '}},';
  return code.replace(/'/g, '"');
};

Blockly.JavaScript['blocky_action_mqtt'] = function (block) {
  var value_action_mqtt_topic = Blockly.JavaScript.valueToCode(block, 'action_mqtt_topic', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_mqtt_message = Blockly.JavaScript.valueToCode(block, 'action_mqtt_message', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{"type": "action.mqtt", "configuration": {"topic": ' + value_action_mqtt_topic +
    ', "message": ' + value_action_mqtt_message + '}},';
  return code.replace(/'/g, '"');
};

Blockly.JavaScript['blocky_triggers_actions'] = function (block) {
  var statements_rule_triggers = Blockly.JavaScript.statementToCode(block, 'rule_triggers').trim().slice(0, -1);
  var value_rule_logic = Blockly.JavaScript.valueToCode(block, 'rule_logic', Blockly.JavaScript.ORDER_ATOMIC);
  var blocky_triggers = '<blocky_triggers>[' + statements_rule_triggers + ']</blocky_triggers>\n';
  var blocky_actions = '<blocky_actions>' + value_rule_logic + '</blocky_actions>\n';
  var code = blocky_triggers + blocky_actions;
  return code;
};

Blockly.JavaScript['blocky_data_device_name'] = function (block) {
  var code = '{{blocky_data_device_name}}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_actions'] = function (block) {
  var statements_rule_actions = Blockly.JavaScript.statementToCode(block, 'rule_actions').trim().slice(0, -1);
  var code = '[' + statements_rule_actions + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};