export const IntegralType = {
  '1': '获取简币', // 获取简币
  '2': '消费简币' // 消费简币
};
// 新增简币类型
export const IntegralAddType = {
  '1': 1, // 签到 - 1简币
  '2': 1 // 评论 - 1简币
};
// 新增简币对应话术
export const IntegralAddDesc = {
  '1': '签到获得+1简币',
  '2': '评论获得+1简币'
};
// 消费简币类型
export const IntegralPayType = {
  '1': -3, // 下载简历模板 - 扣除3简币
  '2': -3, // 下载PPT模板 - 扣除3简币
  '3': -1 // 下载软件 - 扣除1简币
};

// 消费简币对应话术
export const IntegralPayDesc = {
  '1': '下载简历模板消耗-3简币', // 下载简历模板 - 扣除3简币
  '2': '下载PPT模板消耗-3简币', // 下载PPT模板 - 扣除3简币
  '3': '下载软件消耗-1简币'
};