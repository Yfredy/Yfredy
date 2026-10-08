<div align="center">

<img src="avatar.png" alt="姚越" width="120" height="120" style="border-radius:50%;box-shadow:0 4px 16px rgba(44,82,130,0.18)">

# 姚越 · Yao Yue

**AI 工程师 · 音频声学硕士**

南京大学 · 电子信息（音频声学方向）硕士 · 2025

[![Homepage](https://img.shields.io/badge/Homepage-yfredy.github.io%2FYfredy-2c5282?style=for-the-badge&logo=github&logoColor=white)](https://yfredy.github.io/Yfredy/)
[![Email](https://img.shields.io/badge/Email-yue.yao%40smail.nju.edu.cn-2c5282?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yue.yao@smail.nju.edu.cn)
[![GitHub](https://img.shields.io/badge/GitHub-Yfredy-2c5282?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yfredy)

**Tel** `19852128929` · **WeChat** `19852128929`

</div>

---

## 关于我

研究与技术兴趣覆盖**端侧 AI 部署、多智能体协作系统、语音交互链路、光声成像、滤波算法**四大方向。
南京大学，电子信息—音频声学方向，硕士

---

## Focus

`端侧大模型部署` `多智能体协作系统` `语音交互状态机` `QNN/ONNX NPU 推理` `光声成像与自适应滤波` `端云协同架构`

---

## Tech Stack

| Domain | Technologies |
|--------|-------------|
| **端侧 AI** | QNN SDK · ONNX Runtime · sherpa-onnx · AWQ/INT8 量化 · HTP/LPAI 部署 · vLLM / vLLM-Omni |
| **多智能体** | Claude Agent SDK · AG-UI Protocol · A2A Protocol · SSE 流式事件 · K8s + Docker + MySQL |
| **语音交互** | ASR (FunASR/Whisper) · TTS (MeloTTS/Kokoro/CosyVoice3) · SER (emotion2vec) · VAD · 双工 WebSocket |
| **移动端** | Android Kotlin · Jetpack Compose · OkHttp SSE/WebSocket · AudioTrack · JNI/NDK · Mercury SDK |
| **后端** | Python · FastAPI · Java Spring · OkHttp · SSE 流式协议 · MySQL · Docker · K8s |
| **系统/C** | C/C++17 · MSVC/ClangCL · ARM · DSP (Hexagon) · MFCC/FFT · Island-Safe |
| **硬件开发** | FPGA · SoC-FPGA (Zynq) · STM32 · ESP32 · Quartus · Keil · TI AFE5805/AFE5828 |
| **嵌入式** | Linux 系统与驱动开发 · ARM 交叉编译 · 上位机系统开发 · LVDS 双通道 100MHz 采集 |
| **算法** | PyTorch · U-Net · Transformer-NLP · 自适应滤波 (LMS) · 二值化神经网络 (BNN) · 知识蒸馏 |

---

## Key Projects

<table>
<tr>
<td width="50%">

### [多智能体协作平台](https://yfredy.github.io/Yfredy/)
基于 Claude Agent SDK 与 AG-UI 协议的多智能体协作系统
- **Solo/Team 双模式** + Coordinator 协调多 Worker 并行
- Anthropic↔OpenAI 双向协议转换代理
- CommHub 通信中枢 + A2A 8 态任务状态机
- K8s + MySQL + Docker 部署

</td>
<td width="50%">

### [AI 智能眼镜](https://yfredy.github.io/Yfredy/)
雷鸟 AR 眼镜端到端语音交互系统
- 语音问答 + 同声传译 + 视频流识人三大模块
- 端到端延迟 **0.8-1.2s**
- VAD 三阈值门限 + 硬切断 + 看门狗三层兜底
- Jetson 边缘 ASR 矩阵 + MeloTTS/Kokoro 双 TTS

</td>
</tr>
<tr>
<td width="50%">

### [QNN NPU 部署](https://yfredy.github.io/Yfredy/)
字节跳动 · 移动 OS · 声学情感识别部署
- 模型 **481KB**（3.8× 压缩）
- 推理功耗 **<50mW**（ADSP LPAI）
- EMO-DB 5-fold **85.05%**
- 三路学生模型联合蒸馏（6-9× 压缩）

</td>
<td width="50%">

### [MeloTTS-ONNX](https://github.com/201831771214/MeloTTS-ONNX)
TTS ONNX 推理 + QNN HTP 端侧部署（开源）
- DSP 内存 **309→247MB**（-20%）
- fp16 精度崩塌 4 步排查法
- 跨 EP 兼容（CPU/CUDA/QNN）
- 中英文混合实时 TTS

</td>
</tr>
<tr>
<td width="50%">

### [CosyVoice3 TTS 服务]
基于阿里 CosyVoice3-0.5B 的生产级 TTS 推理服务
- vLLM 并发架构重构（守护线程 + token 扇出）
- TTFA **2.6-2.9s → 1.6-1.7s**（↓36-44%）
- 长文本流式重复读三层修复
- OpenAI 兼容 API + 24kHz 流式输出

</td>
<td width="50%">

### [光声成像系统]
国家重点研发项目 · 2 项
- SoC-FPGA 双通道 100MHz 采集
- SNR 提升 **16.8dB**
- 自适应滤波 + 匹配滤波 + Ri-Net 神经网络
- 1 项发明专利（第一作者）

</td>
</tr>
</table>

---

## Metrics at a Glance

| | |
|---|---|
| 📦 最小端侧模型 | **481KB** (SER, INT8) |
| ⚡ 最低推理功耗 | **<50mW** (ADSP LPAI) |
| 🚀 TTS 首包时延优化 | **↓36-44%** (CosyVoice3) |
| 💾 最大内存优化 | **-20%** (DSP 309→247MB) |
| 📊 EMO-DB 准确率 | **85.05%** (5-fold CV) |
| 🔬 光声成像 SNR 提升 | **16.8dB** (国家重点研发) |
| 📝 SCI 二区 top 论文 | **3 篇** (Optics Letters / PRA / Optics Express) |
| 🏆 国家级荣誉 | **11 项** (含 3 次国家奖学金) |
| 🔗 最完整部署链路 | TF → ONNX → QNN → LPAI |

---

## Open Source

- [**MeloTTS-ONNX**](https://github.com/201831771214/MeloTTS-ONNX) — TTS ONNX 推理 + Qualcomm QNN HTP 端侧部署
- [**SER**](https://github.com/201831771214/SER) — 语音情感识别 LIGHT-SERNET / TIM-Net 双架构

---

<div align="center">

**[查看完整项目主页 →](https://yfredy.github.io/Yfredy/)**

</div>
