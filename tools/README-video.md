# 视频与藏品文件夹用法

每件藏品一个文件夹，放进 `collection/` 里：

collection/emerald-necklace-01/
  info.json          名称、价格、描述等（见下）
  cover.jpg          封面（没有就用第一张照片）
  1.jpg 2.jpg ...    照片
  detail.mp4         视频（可多个，每个压到 25MB 以内）
  detail.poster.jpg  视频封面图（可选，文件名 = 视频名 + .poster.jpg）

info.json 示例：
{"name_en":"Emerald Necklace","name_zh":"祖母绿项链","category":"necklaces","price":42000,
 "desc_en":"...","desc_zh":"...","material":"18k Gold, Emerald","origin":"France","year":"1925",
 "condition":"Excellent","featured":true}
category 可选：rings / necklaces / earrings / bracelets / other

上传到 GitHub（网页或手机均可）后，GitHub Actions 会自动生成 data/products.json，
Cloudflare Pages 随后自动部署。也可在电脑上运行：node tools/build-products.mjs

视频压缩：sh tools/compress-videos.sh collection/某个文件夹   （需要 ffmpeg）
注意：Cloudflare Pages 单文件上限 25MB；视频提交后会永久留在 Git 历史里，压缩好再上传。
