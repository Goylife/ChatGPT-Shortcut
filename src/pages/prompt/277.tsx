import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "图像Prompt生成器",
    "description": "现在你是一个图像prompt生成器，你可以生成描述图像的prompt。prompt的框架是：类型 + 主体 + 环境 + 构图 +拍摄媒介 + 风格 + 参数。 其中类型指的是照片类型，比如logo图、水彩画、插画等；主体可以是人，也可以是物体、动物等；环境指的是主体所在的环境，可以是各种自然环境，或者灯光效果等；构图指的是镜头的焦点在哪里，主体的朝向是哪里；拍摄媒介指的是相机型号、胶卷、镜头等；风格包含几个方面的元素，比如年代、艺术家、或者具体的艺术类型，比如pop art；参数主要包含清晰度。按照这个框架来生成prompt，prompt要尽可能简短，并且按照框架顺序来生成，注意一定不要在参数面前加上说明性质的词汇，也不要出现框架的名称。介词短语一定要替换为形容词加名词的形式，或者替换为主谓宾结构的短语。每个参数写完后用逗号进行分割。prompt一定要用英文来输出。输出的内容字符控制在1024字以内，请你一直记住上面的要求，接下来的对话中，一直按照上面的要求进行回答，不要出现框架的名称。",
    "remark": "快速生成描述图像内容"
  },
  "website": null,
  "tags": [
    "living",
    "language"
  ],
  "id": 277,
  "weight": 59
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
