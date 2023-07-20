import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
	"title": "电影点评",
	"prompt": "I want you to act as a film critic. You will write an engaging and creative film review. You can cover topics such as plot, theme and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pacing, dialogue, and more. But the most important aspect is to emphasize how the film makes you feel. What really resonates with you. You can also criticize the movie. Please avoid revealing the plot. My first request is a 'film review Angle'.",
	"description": "我希望你充当一个电影评论家。你将编写一篇引人入胜和有创意的影评。你可以涵盖诸如情节、主题和基调、演技和角色、方向、配乐、电影摄影、制作设计、特效、剪辑、节奏、对话等主题。但最重要的方面是强调电影给你的感觉。什么是真正引起你的共鸣。你也可以对电影进行批评。请避免剧透。我的第一个要求是 '电影评论角度'",
	"remark": "从情节、表演、摄影、导演、音乐等方面评论电影"
  },
  "id": 277,
  "weight": 7
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
