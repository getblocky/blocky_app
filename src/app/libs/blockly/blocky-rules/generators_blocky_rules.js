Blockly.JavaScript['blocky_trigger_device'] = function(block) {
  var dropdown_trigger_device = block.getFieldValue('trigger_device');
  var code = '';
  if (dropdown_trigger_device === 'C') {
    code = 'device_register';
  } else if (dropdown_trigger_device === 'D') {
    code = 'device_offline';
  }
  return [Blockly.JavaScript.quote_(code), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blocky_trigger_mqtt'] = function(block) {
  var code = '';
  var text_trigger_topic = block.getFieldValue('trigger_topic').trim();
  if (text_trigger_topic.length) {
    code = 'mqtt_' + text_trigger_topic;
  }
  return [Blockly.JavaScript.quote_(code), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blocky_data_mqtt'] = function(block) {
  var text_data_topic = block.getFieldValue('data_topic');
  var code = '';
  code = '{{blocky_data_mqtt|' + text_data_topic + '}}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_action_email'] = function(block) {
  var value_action_email_address = Blockly.JavaScript.valueToCode(block, 'action_email_address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_email_subject = Blockly.JavaScript.valueToCode(block, 'action_email_subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_email_message = Blockly.JavaScript.valueToCode(block, 'action_email_message', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{"type": "action.email", "configuration": {"email": ' + value_action_email_address +
    ', "subject": ' + value_action_email_subject +
    ', "message": ' + value_action_email_message + '}},';
  return code.replace(/'/g, '"');
};

Blockly.JavaScript['blocky_action_mqtt'] = function(block) {
  var value_action_mqtt_topic = Blockly.JavaScript.valueToCode(block, 'action_mqtt_topic', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action_mqtt_message = Blockly.JavaScript.valueToCode(block, 'action_mqtt_message', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{"type": "action.mqtt", "configuration": {"topic": ' + value_action_mqtt_topic +
    ', "message": ' + value_action_mqtt_message + '}},';
  return code.replace(/'/g, '"');
};

Blockly.JavaScript['blocky_data_device_name'] = function(block) {
  var code = '{{blocky_data_device_name}}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_actions'] = function(block) {
  var statements_rule_actions = Blockly.JavaScript.statementToCode(block, 'rule_actions').trim().slice(0, -1);
  var code = '[' + statements_rule_actions + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blocky_triggers'] = function(block) {
  var value_rule_triggers = Blockly.JavaScript.valueToCode(block, 'rule_triggers', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '<blocky_triggers>' + value_rule_triggers + '</blocky_triggers>\n';
  return code;
};

Blockly.JavaScript['blocky_logic'] = function(block) {
  var value_rule_logic = Blockly.JavaScript.valueToCode(block, 'rule_logic', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '<blocky_actions>' + value_rule_logic + '</blocky_actions>\n';
  return code;
};