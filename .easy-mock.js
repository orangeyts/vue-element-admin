// .easy-mock.js
module.exports = {
    output: "api", // 产出到项目下的 api 目录，不用手动创建
    template: "axios", // 基于 easy-mock-templates 提供的 axios 模板
    projects: [
      {
        id: "5b091cd95a1d70194be5140e", // 例：58fef6ac5e43ae5dbea5eb53
        name: "recommender" // 该项目下的 API 生成之后会被放到 api/demo 目录下
      }
    ]
  };