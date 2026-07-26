<div align="center">

<img src="avatar.png" alt="姚越" width="120" height="120" style="border-radius:50%;box-shadow:0 4px 16px rgba(44,82,130,0.18)">

# 姚越 · Yao Yue

**AI 工程师 · 音频声学硕士**

南京大学 · 电子信息（音频声学方向）硕士 · 2025

[![Homepage](https://img.shields.io/badge/Homepage-yfredy.github.io%2FYfredy-2c5282?style=for-the-badge&logo=github&logoColor=white)](https://yfredy.github.io/Yfredy/)
[![Email](https://img.shields.io/badge/Email-yue.yao%40smail.nju.edu.cn-2c5282?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yue.yao@smail.nju.edu.cn)
[![GitHub](https://img.shields.io/badge/GitHub-Yfredy-2c5282?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yfredy)

**Tel** `18951656687` · **WeChat** `19852128929`

</div>

---

## 关于我

南京大学音频声学方向硕士（2022-2025），现任南京信息技术研究院（841研究所）研发工程师。研究与技术兴趣覆盖**端侧 AI 部署、多智能体协作系统、语音交互链路、光声成像与自适应滤波算法**四大方向。

- 2025.07 至今：南京信息技术研究院（841研究所）人工智能与大数据研究所——研发工程师
- 2022.07-2025.07：南京大学，电子信息—音频声学方向，硕士
- 2018.09-2022.07：中国矿业大学，主修电子信息工程，辅修会计（英语六级 592 / 四级 597）

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

## 工作经历

### 南京信息技术研究院（841研究所）· 研发工程师 · 2025.07 至今

**1. AI 智能眼镜端到端语音交互系统**（2025.09 - 2026.03）
基于雷鸟 AR 眼镜硬件平台，设计并实现覆盖 Android 端与 Jetson 边缘服务端的端到端语音交互系统，包含语音问答、同声传译、视频流识人三大解耦模块。
- 智能助手四态机 + 流式 TTS，端到端延迟 **0.8-1.2s**，打字机效果 100ms/字符
- 同声传译双工状态机：VAD 分段三阈值门限 + 硬切断兜底 + 看门狗回退
- Jetson 边缘 ASR 矩阵（流式 + CTC 解码器 + 上下文图 + 前缀得分）+ MeloTTS/Kokoro 双 TTS 引擎
- 视频流识人模块：人脸注册与比对、目标跟踪、SQL 命令总线

**2. 多智能体协作系统**（2026.04 至今）
基于 Claude Agent SDK 与开源 AG-UI 协议，设计支持 Solo/Team 双模式的多智能体协作平台。
- Solo/Team 双模式 Agent 架构，Team 模式 Coordinator 协调多 Worker 并行执行
- Anthropic↔OpenAI 双向协议转换代理，统一不同 LLM 供应商 API 差异
- SessionWorker 会话池化调度 + 输出文件治理四重机制
- CommHub 通信中枢 + A2A 协议 8 态任务状态机 + SSE 流式事件驱动
- 混合 Java Service + Python Process 双层架构，K8s + MySQL + Docker 部署

### 实习经历

| 时间 | 公司 | 课题 |
|------|------|------|
| 2025.04-2025.07 | **字节跳动 · 移动 OS** | 豆包手机 Ocean / PICO4 Ultra 声学情感识别 QNN NPU 部署（模型 481KB，3.8× 压缩，推理功耗 <50mW，EMO-DB 5-fold 85.05%） |
| 2024.06-2024.09 | **腾讯音乐娱乐集团 · QQ 音乐** | Time-Aware 歌声情感识别模型部署（DTCRN 语音增强 RTF=0.2 / 模型 0.5MB，移动端 AI 人声自动标注 RTF=0.02） |
| 2023.12-2024.05 | **腾讯 IEG · 魔方工作室** | 游戏引擎图形学二值化神经网络（BNN），STM32/ESP32 嵌入式推理 + SIREN 模型二值化改写 |

---

## 科研经历

| 时间 | 项目 | 角色 |
|------|------|------|
| 2022.09-2024.03 | **国家重点研发项目《多模态光声成像》** — 基于自适应滤波算法的光声内窥图像优化（SoC-FPGA 系统，双通道 100MHz 采样，SNR ↑16.8dB） | 第一作者发明专利 |
| 2023.09-2024.08 | **国家重点研发项目《光声高速传输成像》** — 基于 LVDS 超声前端的多通道光声系统（TI AFE5805/5828，256 通道环阵，采样峰值 65MHz） | 核心成员 |
| 2022.08-2022.11 | **Re-vis 算法合作课题** — 基于 multi-yolo 模型部署车载 HUD 识别系统（Jetson Nano 边缘部署） | 算法负责人 |
| 2021.12-2022.06 | **江苏省优秀毕业设计** — 基于 Fully Dense U-Net 的光声成像重建算法（K-Wave 模拟数据集） | 独立完成 |

---

## 学术成果

### SCI 论文（3 篇，均为二区 top / Q1-Q2）

1. **《Optics Letters》**（SCI 二区 top / Q1，2022.09-2023.10）
   *In vivo structural and functional imaging of human nailbed microvasculature using photoacoustic microscopy*
   线（柱）聚焦超声探头 + 自适应滤波与深度学习重建优化 + 双波长血氧饱和度测量

2. **《Physical Review Applied》**（SCI 二区 top / Q1，2023.06-2024.07）
   *Anti-interference photoacoustic microscopy with adaptive noise cancellation and echo recovery for in vivo ocular imaging*
   基于 SoC-FPGA 的双通道低噪声光声信号采集系统 + 自适应滤波降噪 + 匹配滤波算法

3. **《Optics Express》**（SCI 二区 top / Q2，2024.11-2025.01）
   *Enhancement of structural and functional photoacoustic imaging based on a reference-inputted convolutional neural network*
   提出参考输入型神经网络 Ri-Net，**图像对比度提升 2.6×，SNR 提高 9.6dB**

### 国家级期刊论文

- 《基于改进型 U-Net 神经网络的光声图像重建算法》— 电子技术与软件工程
- 《电子信息通信工程中设备抗干扰问题分析》— 数码设计
- 《传输技术在信息通信工程中的有效应用分析》— 江苏通信

### 发明专利（第一作者）

《基于双通道数据采集和噪声抵消的低噪声光声成像方法与系统》

---

## 荣誉证书

### 国家级（11 项）
- 2024 年度**研究生国家奖学金**
- 2018-2019 年度**国家奖学金**
- 2019-2020 年度**国家奖学金**
- 2024 年**研究生电子设计竞赛国家二等奖**
- 2022 年**中国光谷奖学金**
- 2022 年中国电信集团飞"Young"奖学金
- 平煤神马奖学金
- 帝奥微电子奖学金
- 2020 年全国大学生英语竞赛二等奖
- 2021 年美国大学生数学建模比赛二等奖
- 2019 年全国大学生高数竞赛三等奖

### 省级（3 项）
- 2021 年江苏省优秀学生干部
- 2021 年江苏省五一数学建大赛三等奖
- 2020 年 APMCM 亚太数学建模大赛三等奖

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

## Education

- **2022.07 - 2025.07** · **南京大学** · 电子信息（音频声学方向）· 硕士
- **2018.09 - 2022.07** · **中国矿业大学** · 电子信息工程（辅修会计）· 本科
  - 英语六级 592 分 · 英语四级 597 分

---

<div align="center">

**[查看完整项目主页 →](https://yfredy.github.io/Yfredy/)**

</div>
