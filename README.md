# 为什么要做这件事？
市面上目前没有足够的开源项目能够去满足处理jsonSchema的需求：
 比如：满足触发required的条件的所有key，并且匹配所有AllOf,OneOf,AnyOf,if...then计算的key，重组出最小长度的jsonSchema
  
# 这个项目能做什么？
- 计算jsonSchema的最小长度
- 计算jsonSchema的最小长度的同时，计算出所有的key
- 计算jsonSchema的最小长度的同时，计算出所有的key的值
- 计算jsonSchema的最小长度的同时，计算出所有的key的值的类型
- 重组为最小长度的jsonSchema

# 项目结构
```
# Monorepo 总工程
json-shcema-minify/
├── packages/
│   ├── common      # 自定义的公共模块
│   ├── schema-form      # 表单模块
│   └── schema-minify      # 瘦身模块

····
