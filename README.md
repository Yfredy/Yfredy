<div align="center">

# 姚越 · Yao Yue

**端侧 AI 工程师 · 嵌入式语音大模型 · 端到端语音交互**

[![Homepage](https://img.shields.io/badge/Homepage-yfredy.github.io%2FYfredy-00f5ff?style=for-the-badge&logo=github&logoColor=white)](https://yfredy.github.io/Yfredy/)
[![Email](https://img.shields.io/badge/Email-201831771214%40mail.scut.edu.cn-b026ff?style=for-the-badge&logo=gmail&logoColor=white)](mailto:201831771214@mail.scut.edu.cn)

</div>

---

## Focus

`端侧大模型部署` `语音交互状态机` `QNN/ONNX NPU 推理` `C/DSP Island-Safe` `端云协同架构`

---

## Tech Stack

| Domain | Technologies |
|--------|-------------|
| **端侧 AI** | QNN SDK · ONNX Runtime · sherpa-onnx · AWQ/GPTQ 量化 · HTP/LPAI 部署 |
| **语音交互** | ASR (FunASR/Whisper) · TTS (MeloTTS/Kokoro) · SER (emotion2vec) · VAD · HRTF 空间音频 |
| **移动端** | Android Kotlin · Jetpack Compose · OkHttp SSE/WebSocket · AudioTrack · JNI/NDK |
| **后端** | Python · FastAPI · Claude Agent SDK · A2A Protocol · AG-UI |
| **系统/C** | C/C++17 · MSVC/ClangCL · ARM · DSP (Hexagon) · MFCC/FFT · Island-Safe |
| **硬件** | Qualcomm QCS8550 · Jetson Orin · Huawei Ascend NPU · I2S/SPI/I2C |

---

## Key Projects

<table>
<tr>
<td width="50%">

### [AI 智能眼镜](https://yfredy.github.io/Yfredy/)
AR 眼镜端到端语音交互系统
- **110MB** APK 交付
- QA 四态机 + ST 双工状态机（**1500+ 行**）
- 端到端延迟 **1.2-1.8s**
- 三层兜底：VAD → hard-cut 2.5s → watchdog 3s

</td>
<td width="50%">

### [MeloTTS-ONNX](https://github.com/201831771214/MeloTTS-ONNX)
TTS ONNX 推理 + QNN HTP 端侧部署（**开源**）
- DSP 内存 **309→247MB**（-20%）
- 解决 fp16 精度崩塌 4 步排查法
- chunked 推理 + 尾部静音裁剪
- 中英文混合实时 TTS

</td>
</tr>
<tr>
<td width="50%">

### [SER 语音情感识别]
端侧 Always-On 情感识别
- 模型 **481KB**（3.8× 压缩）
- 推理功耗 **<50mW**（ADSP LPAI）
- Island-Safe 纯 C MFCC（零 malloc）
- 6 个跨语种数据集 · 7 类情感

</td>
<td width="50%">

### [空间音频引擎]
HRTF 双耳渲染全平台
- 分区 FFT 卷积 **29.5× 实时**
- 延迟 **5.8ms**（block=256, IR=512）
- C MSVC 编译 **8.53 Msmp/s**
- MIT KEMAR / CIPIC / LISTEN / Synthetic

</td>
</tr>
<tr>
<td width="50%">

### [SuperAgent · 星智]
多智能体协作系统
- 双网关 + Coordinator Mode + Worker 池
- AgentBus（ANP Pub/Sub）通信
- SessionWorker 池化（TTL 30min + LRU）
- CircuitBreaker 三态熔断

</td>
<td width="50%">

### [SER-Distill 知识蒸馏]
emotion2vec → 轻量 CNN
- 参数压缩 **6-9×**（460K → 50-80K）
- EMO-DB **85.05%** / Macro-F1=0.8491
- 联合损失 L = α·T²·KL + (1-α)·CE
- 跨框架 PyTorch→TF→QNN→LPAI

</td>
</tr>
</table>

---

## Metrics at a Glance

| | |
|---|---|
| 📦 最小端侧模型 | **481KB** (SER, INT8) |
| ⚡ 最低推理功耗 | **<50mW** (ADSP LPAI) |
| 🚀 最大推理加速 | **29.5×** (分区 FFT) |
| 💾 最大内存优化 | **-20%** (DSP 309→247MB) |
| 🔗 最完整部署链路 | TF → ONNX → QNN → LPAI |
| 📊 22 项目 · 6 领域 · 15000+ 行 |

---

## Open Source

- [**MeloTTS-ONNX**](https://github.com/201831771214/MeloTTS-ONNX) — TTS ONNX 推理 + Qualcomm QNN HTP 端侧部署
- [**SER**](https://github.com/201831771214/SER) — 语音情感识别 LIGHT-SERNET / TIM-Net 双架构

---

<div align="center">

**[查看完整项目主页 →](https://yfredy.github.io/Yfredy/)**

</div>
