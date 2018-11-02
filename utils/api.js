let HOST_URI = 'https://www.v2ex.com/api/';

// 获取用户信息
let GET_USERINFO = 'members/show.json';

// 获取主题
// 获取最新的主题
let LATEST_TOPIC = 'topics/latest.json';
// 获取主题信息  :id | (:username | :node_id | :node_name)
var GET_TOPICS = 'topics/show.json';
// 获取回复 :topic_id (:page , :page_size)?
var GET_REPLIES = 'replies/show.json';
// 获取热议主题
var HOT_TOPIC = 'topics/hot.json';
// 所有的节点
var ALL_NODE = 'nodes/all.json';
// 获取节点信息 
// 节点id :id 节点名 :name
var NODE_INFO = 'topics/show.json';

// url编码
function _obj2uri(obj) {
  return Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join('&');
}

// 获取用户信息
function _getUserInfo(o) {
  return HOST_URI + GET_USERINFO + '?' + _obj2uri(o);
}

// 获取最新详情
function _getTopicInfo(o) {
  return HOST_URI + GET_TOPICS + '?' + _obj2uri(o);
} 

// 返回获取最新主题的地址
function _getLatestTopic(o) {
  return HOST_URI + LATEST_TOPIC + '?' + _obj2uri(o);
}

// 返回回复信息的地址
function _getReplies(o) {
  return HOST_URI + GET_REPLIES + '?' + _obj2uri(o);
}

// 返回最热地址
function _getHotestTopic(o) {
  return HOST_URI + HOT_TOPIC + '?' + _obj2uri(o);
}

// 获取所有node
function _getAllNode() {
  return HOST_URI + ALL_NODE;
}

// 获取node信息
function _getNodeInfo(o) {
  return HOST_URI + NODE_INFO + '?' + _obj2uri(o);
}

module.exports = {
  getLatestTopic: _getLatestTopic,
  getTopicInfo: _getTopicInfo,
  getReplies: _getReplies,
  getHotestTopic: _getHotestTopic,
  getAllNode: _getAllNode,
  getNodeInfo: _getNodeInfo,
  getUserInfo: _getUserInfo
};