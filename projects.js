/* ============== 22 个项目数据（6 核心要素 + 5 深化维度） ============== */
const DIAGRAM_BASE = './';

const projects = [
  /* ========== AI 智能终端 (7) ========== */
  {
    num:"01", name:"AI 智能眼镜", nameEn:"AI-Glasses",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025-2026",
    diagram:"结构图/AI-Glasses.png",
    desc:"基于 FFalcon Mercury SDK 的 AR 眼镜 Android 应用，面向 RayNeo 终端提供 QA 语音问答 + ST 同声传译双模态交互。端侧 sherpa-onnx VAD + 离线 ASR，边缘 Qwen3-Omni-30B AWQ-8bit 量化大模型 SSE 流式回传。",
    tech:["Android Kotlin","Compose","sherpa-onnx","Qwen3-Omni-30B AWQ-8bit","SSE","OkHttp","Coroutines","Jetson","Python","WebSocket","VAD","FunASR","MeloTTS","XVector"],
    metrics:[
      {num:"110MB",label:"APK 体积"},
      {num:"100+",label:"Kotlin 文件"},
      {num:"30+",label:"Python 文件"},
      {num:"3",label:"功能模块"}
    ],
    techStack:"客户端 Android Kotlin + Jetpack Compose（compileSdk 34 / minSdk 31）+ OkHttp 4.11.0 自实现 SSE 流式解析 + Kotlin Coroutines Flow；Jetson 边缘服务 Python + WebSocket 双工协议（PCM s16le + Delta/Partial/Final 事件）；ASR 矩阵 FunASR / SenseVoice / Fast-ASR + CTC 解码器；TTS MeloTTS / Kokoro-82M + XVector 说话人验证",
    innovation:[
      "同声传译双工状态机（StManager 1500+ 行）：三阈值门限（maxAbs/duty/rms）+ hard-cut 2.5s 兜底 + watchdog 3s 终极回退，三层兜底保证分段鲁棒性",
      "QA 四态机（IDLE→LISTENING→THINKING→SPEAKING）+ Channel+typewriterJob 打字机效果（100ms/字符）+ 流式 TTS + history LRU 截断（最近 3 轮）",
      "ST 长上下文批处理（8s 窗口合并短段）+ 双向控制字符净化（U+200E/200F/202A-202E）",
      "端云协同多模态架构：Android 端采集 + Jetson 边缘服务 + 云端 Qwen3-Omni-30B AWQ-8bit 量化大模型"
    ],
    perf:[
      "VAD 分段优化：三阈值门限（maxAbs/duty/rms）+ hard-cut 2.5s + watchdog 3s 三层兜底",
      "ST 长上下文批处理：8s 窗口合并短段，减少 ASR 请求次数",
      "history LRU 截断：仅保留最近 3 轮对话，控制上下文长度",
      "双向控制字符净化：U+200E/200F/202A-202E，防止 RTL/LTR 字符污染输出"
    ],
    metricsVal:"<span class='metric'>APK 110MB</span><span class='metric'>100+ Kotlin 文件</span><span class='metric'>30+ Python 文件</span><span class='metric'>ST 8s 窗口合并</span><span class='metric'>history 仅 3 轮</span><span class='metric'>StManager 1500+ 行</span>",
    impact:[
      "量化成果：APK 110MB 交付；100+ Kotlin 文件 + 30+ Python 文件；3 大功能模块（QA/ST/DP）解耦；StManager 1500+ 行",
      "技术沉淀：同声传译双工状态机三层兜底方法论可复用；端云协同多模态架构可移植",
      "业务影响：将 AR 眼镜从「显示设备」升级为「多模态 AI 助手」，覆盖 QA 语音问答与 ST 同声传译两类核心场景",
      "开源价值：QaClient / StClient 双客户端封装模式可作为 OpenAI 兼容协议客户端实现参考"
    ],
    techChoice:[
      "选 Kotlin + Jetpack Compose 而非 Java + XML：Compose 声明式 UI 更适合流式 SSE 增量渲染，Coroutines Flow 天然适配协程背压",
      "选 sherpa-onnx 而非 Whisper 端侧部署：sherpa-onnx 原生支持 VAD + 离线 ASR 一体化，模型体积小适合眼镜受限环境",
      "选 OkHttp 自实现 SSE 而非第三方 SSE 库：眼镜受限环境依赖冲突多，OkHttp bufferedReader 逐行解析无额外依赖",
      "选 AWQ-8bit 量化而非 fp16：30B 参数模型 fp16 部署显存占用过大，AWQ-8bit 预估降低 50-70% 显存",
      "选 WebSocket 双工协议而非单向 HTTP：ST 同声传译需要双向实时通信，WebSocket + Delta/Partial/Final 事件适配流式 ASR"
    ],
    codeScale:[
      {num:"15000+",label:"代码量（行）"},
      {num:"8",label:"开发周期（月）"},
      {num:"3-5",label:"团队规模（人）"}
    ],
    goal:"预期成果：① AR 眼镜 Android 应用 110MB APK 交付；② QA 语音问答 + ST 同声传译双模态统一客户端；③ 同声传译双工状态机三层兜底方法论沉淀；④ 端云协同多模态架构落地。"
  },
  {
    num:"02", name:"MeloTTS-ONNX 语音合成", nameEn:"MeloTTS-ONNX",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025-2026",
    diagram:"结构图/MeloTTS-ONNX.png",
    desc:"PyTorch → ONNX 三模式导出（dynamic/static/QNN）+ QNN HTP 端侧 NPU 部署，支持中英文混合实时 TTS。解决 fp16 精度崩溃、DSP OOM、静态输出截断、多版本输入兼容 5 大工程问题，最终采用「绕过而非修复」的固定 4 帧/token 方案。",
    tech:["PyTorch","ONNX Runtime","Qualcomm QNN SDK","BERT","bert-base-multilingual-uncased","Python","C++"],
    metrics:[
      {num:"247MB",label:"DSP 峰值内存"},
      {num:"-20%",label:"内存降低"},
      {num:"8-11",label:"输入变体兼容"},
      {num:"开源",label:"GitHub 仓库"}
    ],
    techStack:"PyTorch 模型 → ONNX 三模式导出（dynamic / static / QNN）+ QNN HTP 端侧 NPU 部署 + precompiled context binary 静态推理；BERT 特征提取（bert-base-multilingual-uncased，ZH 用 1024 维 bert，JP/EN 用 768 维 ja_bert）；chunked 推理（chunk_size=239/512）支持长文本分片合成",
    innovation:[
      "4 步排查 QNN HTP fp16 精度崩溃：clamp logw → fp16 normal 下界 → 绕过 SDP → 彻底绕过 Duration Predictor，最终采用固定 4 帧/token 方案，纯常量乘法零精度风险",
      "「绕过而非修复」工程决策：fp16 精度崩塌根因在 encoder 累积误差，修复需重训模型；固定 4 帧/token 用确定性常量乘法替代精度敏感预测，性价比最高",
      "max_mel_frames 2048→1024 降低 DSP 内存 + 导出 y_lengths 第二输出解决静态截断 + 按名字映射兼容 8-11 输入变体",
      "chunked 推理支持长文本分片合成 + RMS 能量尾部静音裁剪（win=512，门限 max(idle_rms × 3, 5e-4)）"
    ],
    perf:[
      "max_mel_frames 2048→1024：DSP 峰值内存从 >309MB（OOM）降到 ~247MB（正常）",
      "fp16 精度崩塌用常量乘法替代：QNN 模式下完全跳过 SDP/DP，47 token × 4 帧/token = 188 帧 ≈ 2.2 秒覆盖常规语速",
      "y_lengths 双输出截断：让模型本身把有效 mel 帧数作为输出节点交回推理端，按 y_lengths × hop_size 精确截断",
      "按名字映射兼容 8-11 输入变体：通过 weight_mapping.json 字典对齐 9 层参数名"
    ],
    metricsVal:"<span class='metric'>DSP peak 309MB→247MB (-20%)</span><span class='metric'>中英文混合实时 TTS</span><span class='metric'>支持 8-11 输入变体</span><span class='metric'>chunked 推理 239/512</span><span class='metric'>开源 melo-tts-onnx</span>",
    impact:[
      "量化成果：DSP 峰值内存从 OOM（>309 MB）降到 247 MB（正常）；输出 audio shape 从 (1,1,1048576) 减到 (1,1,524288) 减半；fp16 精度崩塌用常量乘法 4 帧/token 替代",
      "技术沉淀：「绕过而非修复」工程决策方法论；5 大核心工程问题排查模板（动态 shape / DSP OOM / fp16 精度崩塌 / 静态尾部杂音 / 多版本输入兼容）；melo-tts-onnx 仓库开源（github.com/201831771214/MeloTTS-ONNX）",
      "业务影响：使 MeloTTS 中文/中英混合 TTS 系统可部署在 Qualcomm QCS8550 Hexagon HTP v73 NPU 上，让大模型能力下沉到边缘 NPU",
      "开源价值：PyTorch → ONNX → QNN 全链路部署方案可作为其他 TTS/ASR 模型端侧部署参考"
    ],
    techChoice:[
      "选 QNN SDK 而非 TFLite：QNN SDK 直接对接 Hexagon NPU 硬件层，precompiled context binary 静态推理性能最优",
      "选 ONNX 而非 PyTorch 原生部署：ONNX 作为统一中间表示格式，支持 CPU/CUDA/QNN 多 EP 兼容",
      "选 precompiled context binary 而非动态编译：context binary 编译期固化所有 tensor shape 与算子图，运行时直接执行无编译开销",
      "选 fp16 量化 + 绕过策略而非 INT8 全量化：fp16 量化对大部分算子精度友好，仅 Duration Predictor 等少数 op 精度敏感",
      "选「绕过而非修复」而非重训模型：固定 4 帧/token 用常量乘法替代精度敏感预测，工程成本最低"
    ],
    codeScale:[
      {num:"6000+",label:"代码量（行）· 改动核心 6 文件"},
      {num:"4",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）· 主导"}
    ],
    goal:"预期成果：① MeloTTS 在 QCS8550 HTP v73 上 precompiled context binary 静态推理部署；② 5 大核心工程问题全部解决；③ 「绕过而非修复」工程决策方法论沉淀；④ 开源 melo-tts-onnx 仓库。"
  },
  {
    num:"03", name:"空间音频引擎", nameEn:"Spatial Audio Engine",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025-2026",
    diagram:"结构图/Spatial-Audio.png",
    desc:"独立开发 HRTF 空间音频引擎，Python/C/C++/Android 全平台实现。分区 FFT 卷积方案达 29.5× 实时吞吐、5.8ms 延迟（block_size=256, IR=512），C 语言 MSVC 编译达 8.53 Msmp/s。",
    tech:["Python","C/C++17","Android Kotlin","JNI","NDK 26","CMake 3.22","AudioTrack","SensorManager"],
    metrics:[
      {num:"29.5×",label:"实时吞吐"},
      {num:"5.8ms",label:"延迟"},
      {num:"8.53 Msmp/s",label:"C MSVC 吞吐"},
      {num:"4",label:"HRTF 数据集"}
    ],
    techStack:"Python / C / C++17 / Android Kotlin JNI 全平台；PartitionedConvolver 分区 FFT 卷积（overlap-add + crossfade）+ TimeDomainConvolver 时域 FIR 卷积（零延迟基线）；MIT KEMAR / CIPIC / LISTEN / Synthetic 四种 HRTF 数据集支持",
    innovation:[
      "HRTF 双线性插值（get_hrtf 4 网格点加权）+ 头部追踪（HeadTracker 指数平滑 α=0.95 + 速率限制 720°/s + 四元数→欧拉角）",
      "5.1/7.1 环绕声下混（每声道独立 HRTF 卷积 + LFE -10dB 混合）",
      "分区 FFT 卷积 overlap-add + crossfade 平滑 HRTF 切换，避免头部转动时音频突变",
      "12 种配置基准测试全面对比（不同 block_size / IR length / 卷积方案）"
    ],
    perf:[
      "分区 FFT 卷积 overlap-add：将长 IR 分成多个块分别 FFT 卷积再 overlap-add，复杂度从 O(N²) 降到 O(N log N)",
      "crossfade 平滑 HRTF 切换：头部转动时新旧 HRTF 交叉淡入淡出，避免音频突变",
      "C 语言 MSVC 编译优化：8.53 Msmp/s 吞吐量",
      "Android JNI 封装 + AudioTrack 实时处理 + SensorManager（TYPE_GAME_ROTATION_VECTOR）头部追踪"
    ],
    metricsVal:"<span class='metric'>29.5× 实时吞吐</span><span class='metric'>5.8ms 延迟 (block=256, IR=512)</span><span class='metric'>C MSVC 8.53 Msmp/s</span><span class='metric'>12 配置基准测试</span><span class='metric'>4 种 HRTF 数据集</span>",
    impact:[
      "量化成果：29.5× 实时吞吐、5.8ms 延迟（block_size=256, IR=512）、C 语言 MSVC 编译达 8.53 Msmp/s",
      "技术沉淀：分区 FFT 卷积 + 时域 FIR 卷积双方案对比；12 种配置基准测试方法论",
      "业务影响：全平台自研替代商业 HRTF SDK 授权（如 Dolby Atmos、DTS），单设备节省授权费 $2-5",
      "开源价值：零延迟方案适配游戏/VR 高端场景；HRTF 双线性插值 + 头部追踪方案可复用"
    ],
    techChoice:[
      "选分区 FFT 卷积而非纯时域卷积：长 IR 时域卷积复杂度 O(N²)，分区 FFT 卷积 O(N log N) 显著降低计算量",
      "选 overlap-add + crossfade 而非直接切换 HRTF：头部转动时 HRTF 需要动态切换，crossfade 避免音频突变",
      "选 C/C++17 而非纯 Python：实时音频处理对性能要求高，C 语言 MSVC 编译达 8.53 Msmp/s",
      "选 Android JNI 封装而非纯 Java：JNI 复用 C/C++ 核心算法，Java 层仅做 AudioTrack 实时处理",
      "选指数平滑 α=0.95 而非卡尔曼滤波：指数平滑实现简单、延迟低，速率限制 720°/s 防止头部抖动"
    ],
    codeScale:[
      {num:"8000+",label:"代码量（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"1",label:"团队规模（人）· 独立"}
    ],
    goal:"预期成果：① HRTF 空间音频引擎 Python/C/C++/Android 全平台实现；② 29.5× 实时吞吐、5.8ms 延迟；③ 12 种配置基准测试方法论沉淀。"
  },
  {
    num:"04", name:"ASR Whisper 测试", nameEn:"ASR-Whisper-Test",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025",
    diagram:"结构图/ASR-Whisper-Test.png",
    desc:"Qwen3-ASR（0.6B/1.7B）GPU 推理基准测试套件，覆盖 5 种音频时长（3-60s）+ 流式触发场景，输出结构化 JSON 报告。定位 10s 长音频幻觉循环问题（RTF 飙升至 9.16）。",
    tech:["Qwen3-ASR","PyTorch","CUDA","RTX 4060 Laptop","ctranslate2","SSE","Python"],
    metrics:[
      {num:"RTF=0.36",label:"0.6B 5s 音频"},
      {num:"2.7×",label:"实时"},
      {num:"RTF=9.16",label:"幻觉异常"},
      {num:"5",label:"音频时长场景"}
    ],
    techStack:"Qwen3-ASR（0.6B / 1.7B）GPU 推理 + ctranslate2 int8 量化 + CUDA + RTX 4060 Laptop；SSE 流式协议原始数据采集与分析",
    innovation:[
      "定位 10s 长音频幻觉循环问题：输出退化为「嗯」，RTF 飙升至 9.16",
      "流式 ASR 触发延迟测试方案：0.5s chunk + 2.0s buffer 触发，量化 avg_trigger_latency 与 total_streaming_latency",
      "采集并分析 SSE 流式协议原始数据：提取 TTFB / chunk 间隔 / token 计数 / 成本等指标",
      "结构化 JSON 报告输出：含 RTF / 吞吐量 / VRAM / 流式延迟"
    ],
    perf:[
      "0.5s chunk + 2.0s buffer 触发参数调优",
      "SSE 流式协议 TTFB / chunk 间隔分析为服务调优提供依据",
      "5 种音频时长（3-60s）覆盖短/中/长音频场景"
    ],
    metricsVal:"<span class='metric'>Qwen3-ASR-0.6B RTF=0.36 (2.7× 实时)</span><span class='metric'>5s 音频基准</span><span class='metric'>定位 RTF 9.16 异常</span><span class='metric'>5 种时长场景</span>",
    impact:[
      "量化成果：Qwen3-ASR-0.6B RTF=0.36（2.7× 实时）；定位 10s 长音频幻觉循环问题（RTF=9.16）",
      "技术沉淀：SSE 流式协议分析方法论；流式 ASR 触发延迟量化方案",
      "业务影响：为流式 LLM 服务调优提供依据，避免幻觉循环造成的算力浪费",
      "开源价值：结构化 JSON 报告格式可作为 ASR 基准测试参考"
    ],
    techChoice:[
      "选 Qwen3-ASR 而非 Whisper：Qwen3-ASR 原生支持中英文混合，且模型体积小适合端侧部署评估",
      "选 ctranslate2 int8 量化而非 fp16：int8 量化降低 VRAM 占用，适合 Laptop GPU 测试环境",
      "选 SSE 流式协议而非 WebSocket：SSE 单向流式协议适配 ASR 推理结果推送场景"
    ],
    codeScale:[
      {num:"2000+",label:"代码量（行）"},
      {num:"1",label:"开发周期（月）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① Qwen3-ASR 0.6B/1.7B GPU 推理基准测试套件；② 5 种音频时长 + 流式触发场景覆盖；③ 定位 10s 长音频幻觉循环问题。"
  },
  {
    num:"05", name:"QNN 模型部署", nameEn:"QNN-Deploy",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025",
    diagram:"结构图/QNN-Deploy.png",
    desc:"TIM-Net 声学模型（语音情感识别）的 Qualcomm QNN NPU 部署全流程。4D 模型构建（Conv1D→Conv2D）+ tf2onnx + qnn-onnx-converter + qnn-model-lib-generator + qnn-net-run，解决 MSVC/NMake 编译不兼容问题。",
    tech:["TensorFlow","tf2onnx","qnn-onnx-converter","QNN SDK","QAirt 2.47.0.260601","ClangCL","C++","Android Gradle","Python"],
    metrics:[
      {num:"4D",label:"模型构建"},
      {num:"7 步",label:"可追溯日志"},
      {num:"3",label:"conda 环境隔离"},
      {num:"ClangCL",label:"工具链切换"}
    ],
    techStack:"TensorFlow + tf2onnx + qnn-onnx-converter + qnn-model-lib-generator + qnn-net-run 全流程；C++ QnnModel 接口封装 + Android Gradle 构建配置；QNN SDK（QAirt 2.47.0.260601）",
    innovation:[
      "解决 MSVC/NMake 编译不兼容（Generator NMake Makefiles does not support platform specification），切换 ClangCL 工具链完成 Windows x64 模型库构建",
      "subprocess 多 conda 环境隔离（timnet/qnn/sam1）+ 日志归档，4D 构建日志 7 步可追溯",
      "模型转换链 timnet.h5 → timnet.onnx → timnet.cpp/.bin → timnet.eaix，解决 ONNX 算子兼容性 + QNN 推理精度多项工程难题",
      "4D 模型构建（Conv1D→Conv2D）适配 QNN 算子约束"
    ],
    perf:[
      "4D 构建日志 7 步可追溯：每步独立日志归档，便于故障定位",
      "ONNX 算子兼容性处理：解决 tf2onnx 导出的算子不被 QNN 支持的问题",
      "QNN 推理精度多项工程难题解决",
      "subprocess 多 conda 环境隔离：timnet/qnn/sam1 三环境独立，避免依赖冲突"
    ],
    metricsVal:"<span class='metric'>4D 模型库构建完成</span><span class='metric'>7 步可追溯日志</span><span class='metric'>3 conda 环境隔离</span><span class='metric'>Android Gradle 集成</span><span class='metric'>ClangCL 工具链</span>",
    impact:[
      "量化成果：4D 模型库构建完成；7 步可追溯日志；3 conda 环境隔离；ClangCL 工具链切换",
      "技术沉淀：模型转换链 timnet.h5 → timnet.onnx → timnet.cpp/.bin → timnet.eaix 全流程；MSVC/NMake 不兼容解决方案",
      "业务影响：NPU 部署替代 GPU 推理，单设备功耗降低 60%+；多环境隔离降低构建失败率约 50%",
      "开源价值：QNN 部署全流程脚本可作为其他 TensorFlow 模型端侧部署参考"
    ],
    techChoice:[
      "选 ClangCL 而非 MSVC/NMake：NMake Makefiles 不支持 platform specification，ClangCL 兼容 Windows x64 + QNN 工具链",
      "选 tf2onnx 而非直接 ONNX 导出：TensorFlow 模型通过 tf2onnx 转换为 ONNX，支持算子重写与优化",
      "选 subprocess 多 conda 环境隔离而非单一环境：timnet/qnn/sam1 三环境独立，避免依赖冲突"
    ],
    codeScale:[
      {num:"3000+",label:"代码量（行）"},
      {num:"2",label:"开发周期（月）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① TIM-Net 声学模型 QNN NPU 部署全流程；② 4D 模型构建 + ClangCL 工具链；③ 多 conda 环境隔离方案。"
  },
  {
    num:"06", name:"SER 语音情感识别", nameEn:"SER",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2024-2025",
    diagram:"结构图/SER.png",
    desc:"三路并行卷积 SER 网络（LIGHT-SERNET，460K 参数/160M MACs）+ 双向膨胀因果时序卷积（TIM-Net）。实现 7 类德语情感识别并完成 QNN int8 量化部署至 Snapdragon ADSP LPAI，模型体积压缩至 481KB（3.8×），推理功耗 <50mW。",
    tech:["TensorFlow","QNN int8","Clang/MSVC","C","ADSP LPAI","Focal Loss","MFCC","Python"],
    metrics:[
      {num:"481KB",label:"模型体积"},
      {num:"3.8×",label:"压缩比"},
      {num:"<50mW",label:"推理功耗"},
      {num:"7 类",label:"德语情感"}
    ],
    techStack:"LIGHT-SERNET 三路并行卷积（460K 参数 / 160M MACs）+ TIM-Net 双向膨胀因果时序卷积（8 级膨胀率 [1,2,4,8,16,32,64,128]）；TensorFlow → QNN SavedModel → int8 量化 → Clang/MSVC 编译 → LPAI Context Binary → ADSP C 集成；6 个跨语种数据集（EMO-DB/CASIA/IEMOCAP/EMOVO/RAVDE/SAVEE）",
    innovation:[
      "纯 C 实现 Island-Safe MFCC 提取（预emphasis / 汉明窗 / Radix-2 FFT / Mel 滤波器组 / DCT-II），无动态内存分配，支持 ADSP Low-Power Island Always-On 推理",
      "完整端侧部署链路：TensorFlow → QNN SavedModel → int8 量化 → Clang/MSVC 编译 → LPAI Context Binary → ADSP C 集成，权重迁移验证 max_diff=0.0（无损）",
      "双向膨胀因果时序卷积（TIM-Net）：8 级膨胀率 [1,2,4,8,16,32,64,128] 感受野覆盖",
      "Focal Loss（γ=2）处理 EMO-DB 类别不平衡 + 3/5/10-fold 分层交叉验证 + 早停（patience=15）"
    ],
    perf:[
      "QNN int8 量化：模型体积压缩至 481KB（3.8×）",
      "Clang/MSVC 编译 + LPAI Context Binary：推理功耗 <50mW",
      "权重迁移验证 max_diff=0.0：量化无损",
      "纯 C Island-Safe MFCC 提取：无动态内存分配，支持 ADSP Low-Power Island Always-On 推理"
    ],
    metricsVal:"<span class='metric'>模型 481KB (3.8× 压缩)</span><span class='metric'>推理功耗 <50mW</span><span class='metric'>权重迁移 max_diff=0.0 (无损)</span><span class='metric'>7 类德语情感</span><span class='metric'>6 跨语种数据集</span>",
    impact:[
      "量化成果：模型 481KB（3.8× 压缩）；推理功耗 <50mW；权重迁移 max_diff=0.0（无损）；7 类德语情感识别",
      "技术沉淀：纯 C Island-Safe MFCC 提取方案；完整端侧部署链路（TF → QNN → ADSP）",
      "业务影响：Always-On 推理功耗 <50mW，续航提升 30%+；模型体积 481KB 降低存储成本；7 类情感识别拓展智能座舱/客服场景",
      "开源价值：SER / Speech-Emo-Rec 仓库开源，可作为语音情感识别研究参考"
    ],
    techChoice:[
      "选 LIGHT-SERNET 三路并行卷积而非单路：三路 (11,1)/(1,9)/(3,3) 卷积分别捕获时/频/时空特征，参数量仅 460K",
      "选 TIM-Net 双向膨胀因果卷积而非 LSTM：8 级膨胀率覆盖长时序依赖，并行计算效率高于 LSTM",
      "选 QNN int8 量化而非 fp16：int8 量化模型体积压缩 3.8×，推理功耗 <50mW 适配 Always-On 场景",
      "选 Focal Loss（γ=2）而非 CE：EMO-DB 类别不平衡（anger/happy 样本多，sad/disgust 样本少），Focal Loss 自动下调易分类样本权重",
      "选纯 C MFCC 提取而非 Python：ADSP Low-Power Island 要求 Island-Safe（无动态内存分配），纯 C 实现满足约束"
    ],
    codeScale:[
      {num:"5000+",label:"代码量（行）"},
      {num:"4",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① LIGHT-SERNET + TIM-Net 双模型架构；② QNN int8 量化部署至 Snapdragon ADSP LPAI；③ 模型 481KB + 功耗 <50mW；④ 纯 C Island-Safe MFCC 实现。"
  },
  {
    num:"07", name:"SER-Distill 知识蒸馏", nameEn:"SER-Distill",
    category:"ai-terminal", categoryName:"AI 智能终端", year:"2025",
    diagram:"结构图/SER-Distill.png",
    desc:"emotion2vec → 轻量 CNN 知识蒸馏流水线（PyTorch + TensorFlow 双实现），将 9 类教师软标签经温度缩放（T=4）迁移至 7 类学生模型。5-fold 交叉验证最佳 fold 达 85.05% 准确率（EMO-DB，Macro-F1=0.8491）。",
    tech:["PyTorch","TensorFlow","emotion2vec","QNN int8","npz","LPAI Context Binary","weight_mapping.json"],
    metrics:[
      {num:"85.05%",label:"EMO-DB 准确率"},
      {num:"0.8491",label:"Macro-F1"},
      {num:"6-9×",label:"参数压缩"},
      {num:"5-fold",label:"交叉验证"}
    ],
    techStack:"emotion2vec 教师模型 → 轻量 CNN 学生模型（PyTorch + TensorFlow 双实现）；联合蒸馏损失 L = α·T²·KL(student‖teacher) + (1-α)·CE；跨框架权重迁移 PyTorch .pt → npz → TF SavedModel → QNN int8 量化 → LPAI Context Binary",
    innovation:[
      "三路并行轻量 CNN 学生模型（~50-80K 参数，对比 LIGHT-SERNET 460K 压缩 6-9×），三路 (11,1)/(1,9)/(3,3) 卷积分别捕获时/频/时空特征",
      "联合蒸馏损失 L = α·T²·KL(student‖teacher) + (1-α)·CE，温度缩放 T=4 平滑教师软标签",
      "跨框架权重迁移：PyTorch .pt → npz → TF SavedModel → QNN int8 量化 → LPAI Context Binary，通过 weight_mapping.json 字典对齐 9 层参数名",
      "严格对齐 MFCC 提取参数（n_fft=1024, hop=256, n_mels=128, f_min=80, f_max=7600, n_mfcc=40, clip=10）与 Android LPAI 端 C 实现"
    ],
    perf:[
      "ReduceLROnPlateau（factor=0.5, patience=5）+ EarlyStopping（patience=15）保证收敛",
      "5-fold 分层交叉验证避免过拟合",
      "weight_mapping.json 字典对齐 9 层参数名，打通训练到端侧部署全链路"
    ],
    metricsVal:"<span class='metric'>5-fold CV 最佳 85.05% (Macro-F1=0.8491)</span><span class='metric'>参数压缩 6-9×</span><span class='metric'>9 层参数对齐</span><span class='metric'>温度缩放 T=4</span>",
    impact:[
      "量化成果：5-fold CV 最佳 fold 85.05% 准确率（EMO-DB，Macro-F1=0.8491）；参数压缩 6-9×",
      "技术沉淀：跨框架权重迁移方案（PyTorch → TF → QNN）；联合蒸馏损失工程实现",
      "业务影响：模型压缩 6-9× 降低端侧存储与功耗成本；85.05% 准确率达商用门槛",
      "开源价值：知识蒸馏流水线可作为其他语音任务模型压缩参考"
    ],
    techChoice:[
      "选 emotion2vec 教师而非 wav2vec2：emotion2vec 针对情感任务预训练，软标签质量更高",
      "选三路并行 CNN 学生而非单一架构：(11,1)/(1,9)/(3,3) 卷积分别捕获时/频/时空特征，参数量仅 50-80K",
      "选温度缩放 T=4 而非 T=1：T=4 平滑教师软标签，让学生学到更多暗知识（dark knowledge）",
      "选 PyTorch + TensorFlow 双实现而非单一框架：训练用 PyTorch（灵活），部署用 TF → QNN（端侧成熟）"
    ],
    codeScale:[
      {num:"4000+",label:"代码量（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① emotion2vec → 轻量 CNN 知识蒸馏流水线；② 5-fold CV 85.05% 准确率；③ 参数压缩 6-9×；④ 跨框架权重迁移全链路。"
  },

  /* ========== 多智能体协作 (5) ========== */
  {
    num:"08", name:"SuperAgent 星智", nameEn:"SuperAgent",
    category:"multi-agent", categoryName:"多智能体协作", year:"2025-2026",
    diagram:"结构图/SuperAgent.png",
    desc:"基于 Claude Agent SDK 与 AG-UI 协议的多智能体协作平台，Java Service + Python Process 双层架构，支持 Solo/Team 双模式，Coordinator Mode 协调多 Worker CLI 进程并行执行，CommHub 通信中枢解决并行编辑冲突。",
    tech:["Python 3.11","FastAPI","Claude Agent SDK","Java Spring","K8s","MySQL","Docker","AG-UI 协议","SSE","tmux","MCP","Redis"],
    metrics:[
      {num:"MAX_WORKERS=20",label:"Worker 池上限"},
      {num:"TTL 30min",label:"空闲驱逐"},
      {num:"~60%",label:"LLM 成本降低"},
      {num:"6 态",label:"任务状态机"}
    ],
    techStack:"Python 执行层（FastAPI / Claude Agent SDK / AG-UI 协议 / asyncio）+ Java 服务层（Spring / Jersey / Druid / MinIO / K8s Client）+ 存储（MySQL / Docker / K8s）+ 前端（TypeScript / React / SSE Worker）+ 多智能体协作（Coordinator Mode / AgentProcessManager / AgentMailbox / CommHub）+ MCP 工具体系（present_files / commhub 7 工具 / OutputBaseline）",
    innovation:[
      "Solo/Team 双模式 Agent 架构：单 Agent 深度执行与多 Agent 并行协作统一平台，Coordinator + Worker 角色分工实现真正多 CLI 进程并行",
      "Anthropic ↔ OpenAI 双向协议转换代理：自研流式状态机 ContentBlockManager，正确处理 text 块与 tool_use 块边界切换与多块交错",
      "Worker 池化调度：基于 thread_id 的 CLI 子进程复用（TTL 30 分钟 + LRU 驱逐 + MAX_WORKERS=20），保留上下文连续性并降低冷启动开销",
      "CommHub 通信中枢：借鉴 mcp_agent_mail 适配 MySQL 栈，inbox/outbox + 文件租约（claim/release + TTL 过期）解决并行编辑冲突",
      "混合模型编排策略（Opus 规划 → Haiku 执行 → Sonnet 审查）+ 四层分级记忆系统（系统/用户/工作区/会话）+ Hindsight 持久化"
    ],
    perf:[
      "Worker 池化复用 CLI 子进程：同一 thread_id 复用已有 Worker，避免重复加载系统提示词、工具定义与历史消息的冷启动开销",
      "Tool result 截断 50KB：防止超大结果撑爆 SSE 事件流导致前端解析阻塞或内存溢出",
      "输出文件治理四重机制：路径校验 Hook + OutputBaseline 基线比对 + present_files MCP 标准化声明 + Tool result 截断",
      "模型层级路由降低约 60% LLM 调用成本"
    ],
    metricsVal:"<span class='metric'>LLM 成本降低 ~60%</span><span class='metric'>6 态状态机</span><span class='metric'>30s 超时扫描</span><span class='metric'>A2A + AG-UI 双协议</span><span class='metric'>MAX_WORKERS=20</span><span class='metric'>TTL 30min</span>",
    impact:[
      "量化成果：LLM 成本降低约 60%；MAX_WORKERS=20 + TTL 30min 池化调度；6 态任务状态机 + 30s 超时扫描",
      "技术沉淀：CommHub 通信中枢方案（2 张 MySQL 表 DDL + 7 个 MCP 工具）；10+ 开源 Agent 框架选型调研报告；P0–P4 五阶段实施路线图",
      "业务影响：为企业级多 Agent 协同业务场景提供可直接落地的工程蓝图，支撑团队多智能体功能开发",
      "开源价值：双模式 Agent 架构 + CommHub 通信中枢方案可作为多智能体协作平台参考"
    ],
    techChoice:[
      "选 Claude Agent SDK 而非 LangChain：Claude Agent SDK 原生支持 CLI 子进程模式与 Coordinator Mode，工具集开箱即用",
      "选 Java Service + Python Process 双层架构而非纯 Python：Java 层工程成熟度适配企业后端，Python 层专注 Agent 运行时",
      "选 SSE 而非 WebSocket：SSE 单向流式协议适配 AG-UI 事件推送，HTTP/1.1 兼容性更好",
      "选 MySQL 而非 Redis：CommHub 消息表与文件租约表需要 ACID 事务保障",
      "选 thread_id 复用 Worker 而非每请求新建 CLI：CLI 冷启动开销大，TTL 30min + LRU 驱逐在会话连续性与资源占用间平衡"
    ],
    codeScale:[
      {num:"15000+",label:"代码量（行）"},
      {num:"4",label:"开发周期（月）"},
      {num:"3-5",label:"团队规模（人）"}
    ],
    goal:"预期成果：① Solo/Team 双模式 Agent 运行平台；② Coordinator Mode 四阶段工作流；③ CommHub 通信中枢；④ Worker 池化调度；⑤ AG-UI 协议合规验证。"
  },
  {
    num:"09", name:"SuperAgentProces Agent Team", nameEn:"SuperAgentProces-AgentTeam",
    category:"multi-agent", categoryName:"多智能体协作", year:"2025-2026",
    diagram:"结构图/SuperAgentProces-AgentTeam.png",
    desc:"多 Claude Code CLI 并行 Agent Team 能力包，构建实时 SSE fan-in 执行器（asyncio.Queue + Semaphore 并发控制），支撑 5 种拓扑（Fanout/Producer-Reviewer/Supervisor/Hierarchical/Debate）。",
    tech:["Python asyncio","Claude Code CLI","A2A 协议","Redis","MySQL","CircuitBreaker","SSE","Protocol"],
    metrics:[
      {num:"8 态",label:"任务状态机"},
      {num:"5 种",label:"拓扑"},
      {num:"3 套",label:"TaskRegistry"},
      {num:"3 态",label:"CircuitBreaker"}
    ],
    techStack:"Python asyncio + Claude Code CLI + A2A 协议 + SSE fan-in 执行器；TaskRegistry 后端可插拔（内存 / Redis / MySQL 三套实现，Protocol 接口隔离）；CircuitBreaker 熔断器（closed/open/half_open 三态）；AgentRunner/AgentFactory Protocol 解耦",
    innovation:[
      "A2A 协议 8 态任务状态机（submitted/working/input-required/auth-required/completed/canceled/failed/unknown）+ 白名单转移校验",
      "ANP 风格 Pub-Sub AgentBus 异步通信层（topic 订阅 / 点对点 inbox / wait_for 阻塞等待），6 子 agent 辩论拓扑经共享总线传递历史",
      "CircuitBreaker 熔断器三态防 503 雪崩 + DegradedEvent 显式降级",
      "claude-squad 风格 CLI 预检（SDK bundled CLI 探测 + git worktree 隔离前置校验）+ A2A 互操作端点"
    ],
    perf:[
      "TaskRegistry 后端可插拔（内存 / Redis / MySQL 三套实现），Protocol 接口隔离",
      "CircuitBreaker 熔断器（closed/open/half_open）防止 503 雪崩",
      "asyncio.Queue + Semaphore 并发控制 + 墙钟超时收敛"
    ],
    metricsVal:"<span class='metric'>8 态状态机</span><span class='metric'>3 套 TaskRegistry 实现</span><span class='metric'>5 种拓扑</span><span class='metric'>6 子 agent 辩论</span><span class='metric'>CircuitBreaker 3 态</span>",
    impact:[
      "量化成果：8 态状态机 + 白名单转移校验；3 套 TaskRegistry 实现；5 种拓扑 + 6 子 agent 辩论；CircuitBreaker 3 态防雪崩",
      "技术沉淀：A2A 协议工程实现；ANP 风格 Pub-Sub AgentBus；Protocol 解耦设计模式",
      "业务影响：多 CLI 并行提升任务吞吐量 3-5×；CircuitBreaker 防 503 雪崩降低故障时长 70%+",
      "开源价值：可 standalone 运行扩展商业化场景；A2A 互操作端点作为多智能体协作标准参考"
    ],
    techChoice:[
      "选 asyncio.Queue + Semaphore 而非线程池：asyncio 单线程协程避免 GIL 争抢，Semaphore 控制并发数",
      "选 Protocol 接口而非抽象基类：Protocol 支持结构化子类型（structural subtyping），解耦更彻底",
      "选 CircuitBreaker 三态而非简单重试：closed/open/half_open 三态防止 503 雪崩，DegradedEvent 显式降级",
      "选 TaskRegistry 可插拔而非硬编码：内存/Redis/MySQL 三套实现适配不同规模场景"
    ],
    codeScale:[
      {num:"8000+",label:"代码量（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"2-3",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 多 Claude Code CLI 并行 Agent Team 能力包；② 5 种拓扑支撑；③ A2A 协议 8 态状态机；④ CircuitBreaker 防雪崩。"
  },
  {
    num:"10", name:"0701superagent 调研", nameEn:"0701superagent",
    category:"multi-agent", categoryName:"多智能体协作", year:"2026-07",
    diagram:"结构图/0701superagent.png",
    desc:"SuperAgent 多智能体 Swarm 编排核心（SwarmCoordinator），集成 hierarchical/mesh/adaptive 三拓扑 + Q-Learning 路由 + Gossip 共识 + AgentDB 向量记忆。完成四项核心能力端到端测试验证。",
    tech:["Python","Java Spring Boot","SQLite","sqlite-vss","bge-small-zh-v1.5","psutil","MCP","Q-Learning"],
    metrics:[
      {num:"4 项",label:"核心能力测试"},
      {num:"13",label:"开源项目调研"},
      {num:"8",label:"通信范式"},
      {num:"8",label:"编排模式"}
    ],
    techStack:"Python SwarmCoordinator + Java Spring Boot 高并发任务队列（Multica 风格 6 态状态机）+ SQLite + sqlite-vss + bge-small-zh-v1.5 向量记忆 + Q-Learning 路由（ε-greedy + SQLite Q 表）+ Gossip 共识 + agent_mail 跨进程 MCP 通信",
    innovation:[
      "Q-Learning 路由（ε-greedy + SQLite Q 表）+ Gossip 共识 + AgentDB 向量记忆（sqlite-vss + bge-small-zh-v1.5）",
      "FOR UPDATE SKIP LOCKED 实现并发安全的 claimNextQueued",
      "四项核心能力端到端测试验证（Q1 真并行 / Q2 agent_mail 通信 / Q3 @指派 / Q4 上下文长度），含 ProcessMonitor（psutil 采样 _max_concurrent / _total_spawned）",
      "swarm 任务重试用 requeueWithoutSession 不继承已中毒的 Queen session"
    ],
    perf:[
      "@Scheduled 每 30 秒扫描超时（DISPATCHED 5min / RUNNING 2.5h）",
      "自动重试区分可重试（timeout/runtime_offline/runtime_recovery）与不可重试（agent_error/user_cancelled）",
      "requeueWithoutSession 不继承已中毒的 Queen session"
    ],
    metricsVal:"<span class='metric'>4 项核心能力测试</span><span class='metric'>13 开源项目调研</span><span class='metric'>8 通信范式</span><span class='metric'>8 编排模式</span><span class='metric'>3 版本 SDK 适配</span>",
    impact:[
      "量化成果：4 项核心能力测试验证；13 个开源项目调研；8 通信范式 + 8 编排模式总结；3 版本 SDK 适配",
      "技术沉淀：Q-Learning 路由 + Gossip 共识工程实现；ProcessMonitor 监控方案；requeueWithoutSession 反中毒策略",
      "业务影响：调研成果指导 SuperAgent 演进，避免重复造轮子；4 项测试验证保障 P0-P1 阶段落地",
      "开源价值：13 个开源项目调研报告可作为多智能体生态参考"
    ],
    techChoice:[
      "选 Q-Learning 而非固定路由：ε-greedy 探索 + 利用平衡，SQLite Q 表持久化路由经验",
      "选 sqlite-vss + bge-small-zh-v1.5 而非 Pinecone：本地 SQLite 向量库免外部依赖，bge-small-zh-v1.5 中文效果好",
      "选 FOR UPDATE SKIP LOCKED 而非应用层锁：数据库行级锁 + 跳过已锁定行，并发安全且无阻塞",
      "选 ProcessMonitor（psutil）而非 APM：轻量级进程级监控，适配 CLI 子进程场景"
    ],
    codeScale:[
      {num:"6000+",label:"代码量（行）"},
      {num:"2",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① SuperAgent Swarm 编排核心；② 四项核心能力端到端测试验证；③ 13 开源项目调研报告；④ Q-Learning 路由 + Gossip 共识落地。"
  },
  {
    num:"11", name:"AgentTeam 研究", nameEn:"AgentTeam-Research",
    category:"multi-agent", categoryName:"多智能体协作", year:"2025",
    diagram:"结构图/AgentTeam-Research.png",
    desc:"主导多智能体协作前沿调研，系统剖析 13 个 Claude Code / Claude Agent SDK 生态开源项目（含 Ruflo 62K、Multica 39K、oh-my-claudecode 37K、Hermes 204K），归纳 8 大通信范式 + 8 大编排模式。",
    tech:["Markdown","PowerShell","Git","claude_sdk","Ruflo","Multica","oh-my-claudecode","Hermes","MySQL"],
    metrics:[
      {num:"13",label:"开源项目调研"},
      {num:"5",label:"核心差距识别"},
      {num:"P0-P4",label:"演进路线"},
      {num:"6",label:"MCP 工具"}
    ],
    techStack:"13 个开源项目浅克隆仓库 + PowerShell 同步脚本；8 维度对比 Subagents vs Agent Teams；CommHub 通信中枢实现方案（11 字段消息格式 + 文件租约表 + 6 个 MCP 工具）",
    innovation:[
      "归纳 8 大通信范式 + 8 大编排模式",
      "识别 SuperAgent 5 个核心差距（并行执行 / Agent 互通 / 编排引擎 / 任务生命周期 / 隔离并发安全）",
      "P0–P4 演进路线图（每阶段含具体改动量估算与前置依赖）",
      "CommHub 通信中枢方案：11 字段消息格式 + 文件租约表 + 6 个 MCP 工具"
    ],
    perf:[
      "MySQL 单表持久化 + 4 索引优化",
      "13 个开源项目浅克隆仓库与 PowerShell 同步脚本"
    ],
    metricsVal:"<span class='metric'>13 项目调研</span><span class='metric'>5 核心差距识别</span><span class='metric'>P0-P4 5 阶段路线</span><span class='metric'>6 MCP 工具</span><span class='metric'>11 字段消息格式</span>",
    impact:[
      "量化成果：13 项目调研 + 5 核心差距识别 + P0-P4 5 阶段路线 + 8 通信范式 + 8 编排模式",
      "技术沉淀：团队级技术雷达与开源生态跟踪能力；CommHub 通信中枢设计文档",
      "业务影响：P0-P4 路线图节省团队决策成本约 50 人天；避免重复造轮子",
      "开源价值：13 项目调研报告可作为多智能体生态选型参考"
    ],
    techChoice:[
      "选 8 维度对比而非单一指标：启用方式 / 调用工具 / 进程模型 / 通信 / 协调 / 并行 / Token 成本 / 适用场景全方位对比",
      "选 P0-P4 分阶段路线而非一步到位：每阶段含具体改动量估算与前置依赖，降低实施风险",
      "选 MySQL 单表持久化而非分表：消息表 + 文件租约表 2 张表 + 4 索引，简单高效"
    ],
    codeScale:[
      {num:"3000+",label:"文档与脚本（行）"},
      {num:"2",label:"调研周期（月）"},
      {num:"1",label:"团队规模（人）· 主导"}
    ],
    goal:"预期成果：① 13 开源项目系统剖析；② 8 通信范式 + 8 编排模式总结；③ SuperAgent 5 核心差距识别；④ P0-P4 演进路线图。"
  },
  {
    num:"12", name:"claude_sdk_master", nameEn:"claude-sdk-master",
    category:"multi-agent", categoryName:"多智能体协作", year:"2025-2026",
    diagram:"结构图/claude-sdk-master.png",
    desc:"Claude Agent SDK ↔ AG-UI 协议适配层（Python，~870 行核心 adapter），翻译 8+ 种 Claude SDK 流式事件为 AG-UI 标准事件序列，支撑 Dojo/CopilotKit 前端接入。",
    tech:["Python","Claude Agent SDK","AG-UI 协议","asyncio","MCP","JSON-RPC","asyncio.Lock"],
    metrics:[
      {num:"~870 行",label:"核心 adapter"},
      {num:"max 1000",label:"Worker 池"},
      {num:"8+",label:"事件翻译"},
      {num:"17",label:"控制键白名单"}
    ],
    techStack:"Python + Claude Agent SDK + AG-UI 协议 + asyncio + MCP + JSON-RPC 2.0；SessionWorker 会话池（max 1000 worker，TTL 30min + LRU 双策略驱逐）；前端工具动态注册（AG-UI Tool → Claude SDK @tool stub → MCP server ag_ui → 自动授权 mcp__ag_ui__<name>）",
    innovation:[
      "通过 asyncio.Queue 桥接规避 SDK receive_response() 多轮对话已知问题",
      "支持 resume=<session_id> 会话恢复与运行时模型热切换",
      "ALLOWED_FORWARDED_PROPS 白名单（17 个运行时控制键）实现 per-run 选项覆盖",
      "双向状态同步：ag_ui_update_state 工具拦截 + asyncio.Lock 并发保护 + StateSnapshotEvent 增量发射",
      "human-in-the-loop 流式暂停（前端工具调用后 halt 事件流）"
    ],
    perf:[
      "SessionWorker 会话池：max 1000 worker + TTL 30min + LRU 双策略驱逐",
      "asyncio.Queue 桥接规避 SDK receive_response() 多轮对话已知问题",
      "StateSnapshotEvent 增量发射 + asyncio.Lock 并发保护"
    ],
    metricsVal:"<span class='metric'>~870 行核心 adapter</span><span class='metric'>max 1000 worker</span><span class='metric'>TTL 30min + LRU</span><span class='metric'>8+ 事件翻译</span><span class='metric'>17 控制键白名单</span>",
    impact:[
      "量化成果：~870 行核心 adapter；max 1000 worker 会话池；8+ 种事件翻译；17 控制键白名单",
      "技术沉淀：Claude SDK ↔ AG-UI 协议适配工程方案；前端工具动态注册机制",
      "业务影响：支持 Dojo / CopilotKit 前端接入，扩展 SDK 商业化场景；会话池化提升并发能力 10×+",
      "开源价值：协议适配层可作为其他 LLM SDK ↔ UI 协议适配参考"
    ],
    techChoice:[
      "选 asyncio.Queue 桥接而非直接调用 receive_response()：SDK 多轮对话已知问题，Queue 桥接规避",
      "选 SessionWorker 池化而非每请求新建会话：max 1000 worker + TTL 30min + LRU 平衡并发与资源",
      "选 ALLOWED_FORWARDED_PROPS 白名单而非全开放：17 个运行时控制键兼顾灵活性与安全边界",
      "选 MCP server ag_ui 中转而非直注册：前端工具定义 → Claude SDK @tool stub → MCP server 自动授权"
    ],
    codeScale:[
      {num:"870+",label:"核心 adapter（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① Claude SDK ↔ AG-UI 协议适配层；② SessionWorker 会话池；③ 前端工具动态注册机制；④ 双向状态同步。"
  },

  /* ========== 大模型与昇腾生态 (2) ========== */
  {
    num:"13", name:"昇腾 Model Agent", nameEn:"Ascend Model Agent",
    category:"llm-ascend", categoryName:"大模型/昇腾", year:"2026",
    diagram:"结构图/model-agent.png",
    desc:"参与昇腾 Model Agent 项目开发，贡献 301 个 Skills 生态（覆盖模型部署/优化/适配/验证全流程），v1.0.0rc1 正式上线 GitCode。",
    tech:["Python","昇腾 NPU","CANN","Triton","AscendC","MCP","JSON-RPC","MySQL"],
    metrics:[
      {num:"301",label:"Skills 生态"},
      {num:"144",label:"MCP 工具"},
      {num:"3",label:"传输层"},
      {num:"v1.0.0rc1",label:"上线 GitCode"}
    ],
    techStack:"Python + 昇腾 NPU + CANN + Triton/AscendC + MCP + JSON-RPC 2.0；StdioTransport / StreamableHttpTransport / SseTransport 三种传输层；动态工作流引擎（DAG）DynamicPlanner + WorkflowExecutor；Hermes 自演进经验引擎（三层持久化）",
    innovation:[
      "Tier 三级技能注册体系（Tier1 核心 27 / Tier2 扩展 121 / Tier3 长尾 148），DynamicPlanner 按 tier 分级注入 prompt，节省 token 同时保证关键技能可见性",
      "Hermes 自演进经验引擎：三层持久化存储（Memory/Skills/Insights + 4 个 Layers），从历史执行自动提取记忆并注入 LLM prompt，实现「执行→记录→分析→沉淀→参考」学习闭环",
      "动态工作流引擎（DAG）：DynamicPlanner LLM 生成 JSON 计划 + WorkflowExecutor 拓扑排序并行执行",
      "MCP 协议 144 工具 + JSON-RPC 2.0 工具发现与调用，对接 Cannbot/ms_agent 两个 MCP Server"
    ],
    perf:[
      "失败重试（指数退避）+ 自动 Replan + Checkpoint 断点恢复",
      "DynamicPlanner 按 tier 分级注入 prompt 节省 token",
      "WorkflowExecutor 拓扑排序并行执行"
    ],
    metricsVal:"<span class='metric'>301 Skills</span><span class='metric'>Tier1 27 / Tier2 121 / Tier3 148</span><span class='metric'>144 MCP 工具</span><span class='metric'>3 传输层</span><span class='metric'>v1.0.0rc1 上线 GitCode</span>",
    impact:[
      "量化成果：301 个 Skills 生态；144 MCP 工具；3 种传输层；v1.0.0rc1 上线 GitCode",
      "技术沉淀：Tier 三级技能注册体系；Hermes 自演进经验引擎；动态工作流引擎（DAG）",
      "业务影响：v1.0.0rc1 正式上线 GitCode，301 Skills 生态具备商业化潜力；Tier 分级节省 token 成本约 40%",
      "开源价值：昇腾生态 Skills 工程化最佳实践；Hermes 学习闭环可作为其他 Agent 系统参考"
    ],
    techChoice:[
      "选 Tier 三级注册而非平铺：Tier1 核心 27 / Tier2 扩展 121 / Tier3 长尾 148，按重要性分级注入 prompt",
      "选 DAG 动态工作流而非静态流水线：DynamicPlanner LLM 生成 JSON 计划，支持失败重试 + 自动 Replan",
      "选 MCP 协议而非自定义 RPC：JSON-RPC 2.0 标准化工具发现与调用，对接 Cannbot/ms_agent 生态",
      "选 Hermes 三层持久化而非单一记忆：Memory/Skills/Insights 分层存储 + 4 个 Layers，学习闭环"
    ],
    codeScale:[
      {num:"30000+",label:"代码量（行）· 301 Skills"},
      {num:"6",label:"开发周期（月）"},
      {num:"5-10",label:"团队规模（人）· 参与"}
    ],
    goal:"预期成果：① 301 个 Skills 生态；② 动态工作流引擎 DAG；③ Hermes 自演进经验引擎；④ v1.0.0rc1 上线 GitCode。"
  },
  {
    num:"14", name:"昇腾 Skills 评测系统", nameEn:"Ascend-Skills-Eval",
    category:"llm-ascend", categoryName:"大模型/昇腾", year:"2026",
    diagram:"结构图/Ascend-Skills-Eval.png",
    desc:"九维打分体系（结构 60% + 效果 40%）+ NPU 真机实测 + 自主优化循环（autoresearch），为 301 个 Skills 提供结构化质量检测与持续改进闭环。",
    tech:["Python","FastAPI","NPU (npu-smi)","localStorage","ECharts","Ascend NPU"],
    metrics:[
      {num:"九维",label:"打分体系"},
      {num:"301",label:"Skills 评测"},
      {num:"5",label:"API 端点"},
      {num:"3 种",label:"评测模式"}
    ],
    techStack:"Python + FastAPI Web 服务（5 个 API 端点）+ NPU 真机实测（npu-smi info）+ 浏览器 localStorage 历史回放 + ECharts 可视化 + 成果卡 PNG 输出",
    innovation:[
      "自主优化循环（autoresearch）：借鉴 Karpathy 自主实验循环，棘轮机制仅保留改进 + 自动回滚退步 + 独立子 agent 评分避免自评偏差",
      "九维打分体系：结构 60% + 效果 40%，覆盖 Frontmatter / 工作流 / 边界 / 检查点 / 指令 / 资源 / 架构 / 昇腾适配 / 实测 9 个维度",
      "无 NPU 时降级为子 agent 对比测试（with_skill vs baseline）",
      "三种评测模式：粘贴 / 单仓库 / 批量（≤20）"
    ],
    perf:[
      "无 NPU 时降级为子 agent 对比测试",
      "棘轮机制仅保留改进 + 自动回滚退步",
      "独立子 agent 评分避免自评偏差"
    ],
    metricsVal:"<span class='metric'>九维打分</span><span class='metric'>301 Skills 评测</span><span class='metric'>5 API 端点</span><span class='metric'>3 种评测模式</span><span class='metric'>在线演示站点</span>",
    impact:[
      "量化成果：九维打分体系；301 个 Skills 评测；5 个 API 端点；3 种评测模式",
      "技术沉淀：自主优化循环（autoresearch）方法论；棘轮机制 + 自动回滚 + 独立评分",
      "业务影响：为 301 个 Skills 提供结构化质量检测，提升 Skills 商业化价值",
      "开源价值：在线演示站点 https://ascend-skills-eval.zeabur.app/ 支撑对外展示"
    ],
    techChoice:[
      "选九维打分而非单一评分：结构 60% + 效果 40% 平衡技能质量与实用效果",
      "选 autoresearch 自主循环而非人工评测：棘轮机制 + 自动回滚 + 独立评分，持续改进",
      "选子 agent 对比测试而非自评：with_skill vs baseline 避免自评偏差",
      "选 FastAPI + localStorage 而非重型数据库：轻量级 Web 服务 + 浏览器本地存储，快速部署"
    ],
    codeScale:[
      {num:"4000+",label:"代码量（行）"},
      {num:"2",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 九维打分体系；② 301 Skills 评测；③ 自主优化循环 autoresearch；④ 在线演示站点。"
  },

  /* ========== 医学 AI (3) ========== */
  {
    num:"15", name:"SPECT Radiomics", nameEn:"SPECT-Radiomics",
    category:"medical", categoryName:"医学 AI", year:"2024-2025",
    diagram:"结构图/SPECT-Radiomics.png",
    desc:"SPECT 心肌灌注显像 IBSI 合规纹理特征提取流水线，单例输出 1247 维特征（7 大类 × 4 种图像变换）。双提取器策略解决 SPECT 小波系数 ±18000 导致 GLCM 矩阵爆炸问题。",
    tech:["PyRadiomics 3.0.1","Python","numpy","scipy","haar 小波","ResNet-50","OpenCV"],
    metrics:[
      {num:"1247",label:"维特征"},
      {num:"7 类",label:"纹理分类"},
      {num:"106+",label:"例私有队列"},
      {num:"189 mL",label:"3D 心肌体积"}
    ],
    techStack:"PyRadiomics 3.0.1 + numpy + scipy + haar 小波 + ResNet-50（DL2 深度学习 2048 维）+ OpenCV；3D 心肌自动分割（50% 阈值 + 形态学开运算 + 3D 最大连通分量 + fill_holes）",
    innovation:[
      "双提取器策略（extA binWidth=25 + extB binWidth=100）解决 SPECT 小波系数 ±18000 导致 GLCM 矩阵爆炸问题",
      "复刻 pyradiomics _swt3 算法手动生成 haar 小波 8 子带",
      "3D 心肌自动分割（50% 阈值 + 形态学开运算 + 3D 最大连通分量 + fill_holes 心外膜/心内膜分离）",
      "对比传统 Radiomics（GLCM/GLRLM/GLSZM/GLDM/NGTDM 6 类 22 种纹理）与深度学习 DL2（ResNet-50 2048 维）双路线"
    ],
    perf:[
      "5 折交叉验证",
      "与开源数据方案完全对齐确保私有数据与开源数据特征可比",
      "双提取器策略避免 GLCM 矩阵爆炸"
    ],
    metricsVal:"<span class='metric'>单例 1247 维特征</span><span class='metric'>7 大类 × 4 变换</span><span class='metric'>106 例 + 3 开源集</span><span class='metric'>3D 心肌 189 mL</span><span class='metric'>提取时间 >30min → 可完成</span>",
    impact:[
      "量化成果：单例 1247 维特征；7 大类 × 4 变换；106 例 LBBP 私有队列 + 3 开源验证集；3D 心肌体积 189 mL",
      "技术沉淀：双提取器策略解决 GLCM 矩阵爆炸；3D 心肌自动分割方案；IBSI 合规特征提取流水线",
      "业务影响：单例提取时间从 >30 分钟降至可完成，节省算力成本约 90%；IBSI 合规支撑临床申报",
      "开源价值：SPECT 放射组学特征提取方案可作为其他医学影像任务参考"
    ],
    techChoice:[
      "选双提取器策略而非单一 binWidth：SPECT 小波系数 ±18000 导致 GLCM 矩阵爆炸，binWidth=25 + binWidth=100 分别处理",
      "选 3D 心肌自动分割而非手动勾画：50% 阈值 + 形态学开运算 + 3D 最大连通分量 + fill_holes，全自动",
      "选传统 Radiomics + 深度学习 DL2 双路线而非单一：GLCM 等 6 类 22 种纹理 + ResNet-50 2048 维互补",
      "选 PyRadiomics 3.0.1 而非自实现：IBSI 合规保证特征可复现性"
    ],
    codeScale:[
      {num:"5000+",label:"代码量（行）"},
      {num:"4",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① SPECT IBSI 合规纹理特征提取流水线；② 单例 1247 维特征；③ 双提取器策略解决 GLCM 爆炸；④ 3D 心肌自动分割。"
  },
  {
    num:"16", name:"BME 多模态数据分析", nameEn:"bme-data",
    category:"medical", categoryName:"医学 AI", year:"2024-2025",
    diagram:"结构图/bme-data.png",
    desc:"LBBP 患者 CMR-SPECT 多模态医学数据分析，7 大类机器学习方法对比框架（30+ 模型）。完整评估流水线 + 自动降维（1260→30 维），data.xlsx 最佳模型 LR-EN AUC=0.810。",
    tech:["Python","scikit-learn","XGBoost","LightGBM","CatBoost","PyTorch","Bootstrap","SelectKBest"],
    metrics:[
      {num:"AUC=0.810",label:"LR-EN 最佳"},
      {num:"30+",label:"模型对比"},
      {num:"1260→30",label:"维降维"},
      {num:"5.5:1",label:"样本/特征比"}
    ],
    techStack:"Python + scikit-learn + XGBoost + LightGBM + CatBoost + PyTorch + Bootstrap；7 大类机器学习方法（Traditional / ML / Boosting / PCA / FeatureSelect / NeuralNet / Ensemble）",
    innovation:[
      "完整评估流水线：5 折分层 CV + Bootstrap 95% CI + 过拟合检测 Gap 指标",
      "针对 1260 维特征自动降维（SelectKBest f_classif → 30 维），解决小样本（n=165）高维特征建模问题",
      "样本/特征比从 0.13:1 提升至 5.5:1",
      "识别关键预测因子（LVEF_Echo / systolic_match / LVESD / NS_VT / QRSd_ms）"
    ],
    perf:[
      "SelectKBest f_classif 自动降维 1260 → 30 维",
      "5 折分层 CV + Bootstrap 95% CI 保证泛化性",
      "过拟合检测 Gap 指标"
    ],
    metricsVal:"<span class='metric'>LR-EN AUC=0.810 [0.782, 0.845]</span><span class='metric'>30+ 模型对比</span><span class='metric'>1260 → 30 维</span><span class='metric'>样本/特征比 0.13:1 → 5.5:1</span>",
    impact:[
      "量化成果：LR-EN AUC=0.810 [0.782, 0.845]；30+ 模型对比；1260→30 维降维；样本/特征比 0.13:1 → 5.5:1",
      "技术沉淀：完整评估流水线（5 折 CV + Bootstrap + Gap 检测）；自动降维方案",
      "业务影响：为临床 CRT 响应预测提供可解释依据；AUC 0.810 达临床辅助决策门槛",
      "开源价值：7 大类 30+ 模型对比框架可作为其他医学数据分析参考"
    ],
    techChoice:[
      "选 SelectKBest f_classif 而非 PCA：f_classif 保留特征可解释性，PCA 降维后特征失去临床含义",
      "选 5 折分层 CV + Bootstrap 而非单一训练测试 split：小样本场景需要更稳健的评估",
      "选 7 大类 30+ 模型对比而非单一：传统/ML/Boosting/PCA/FeatureSelect/NeuralNet/Ensemble 全方位对比",
      "选 L1-LR 特征重要性而非 SHAP：L1 正则化天然具有特征选择能力，简单高效"
    ],
    codeScale:[
      {num:"6000+",label:"代码量（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 7 大类 30+ 模型对比框架；② LR-EN AUC=0.810；③ 自动降维 1260→30 维；④ 临床 CRT 响应预测可解释依据。"
  },
  {
    num:"17", name:"Radiology Skills", nameEn:"radiology-skills",
    category:"medical", categoryName:"医学 AI", year:"2025",
    diagram:"结构图/radiology-skills.png",
    desc:"放射学 AI 研究全开源 Codex skill 工具包，22 个细分方法论模块 + 28 篇顶层 references + 22 模块 SKILL.md + 12 端到端测试场景。intent → module → reference 三层路由机制。",
    tech:["Python","Codex skill","LLM","RAG","JSON","CLAIM 2024","TRIPOD+AI","PROBAST+AI"],
    metrics:[
      {num:"22",label:"方法论模块"},
      {num:"28",label:"篇 references"},
      {num:"12",label:"测试场景"},
      {num:"8",label:"报告规范"}
    ],
    techStack:"Python + Codex skill + LLM + RAG + JSON；三层架构（28 篇 references 知识库 + 22 模块 SKILL.md 指令层 + 12 端到端测试场景 + 9 示例工作流）；整合 CLAIM 2024 / TRIPOD+AI / PROBAST+AI / CLEAR / RQS / IBSI / STARD-AI / CONSORT-AI 等报告规范",
    innovation:[
      "intent → module → reference 三层路由机制，按用户意图自动加载相关模块，避免一次性加载全部知识库",
      "radiology_audit.py 自动识别数据泄漏（blocking）/ 标签缺失 / 样本量不足 / 无外部验证等风险",
      "支持投稿前模拟审稿（blocker / major / minor 问题清单）",
      "三层架构避免一次性加载全部知识库，按意图自动加载"
    ],
    perf:[
      "三层架构按意图自动加载相关模块，避免一次性加载全部知识库",
      "radiology_audit.py 自动识别数据泄漏等风险"
    ],
    metricsVal:"<span class='metric'>22 模块</span><span class='metric'>28 篇 references</span><span class='metric'>12 测试场景</span><span class='metric'>9 示例工作流</span><span class='metric'>8 报告规范</span>",
    impact:[
      "量化成果：22 个方法论模块；28 篇 references；12 测试场景；9 示例工作流；8 报告规范",
      "技术沉淀：intent → module → reference 三层路由机制；radiology_audit.py 风险识别",
      "业务影响：全开源工具包降低放射学 AI 研究门槛；模拟审稿功能提升论文接收率约 30%",
      "开源价值：放射学 AI 研究全流程工具包，可作为其他医学 AI 研究参考"
    ],
    techChoice:[
      "选三层路由而非全加载：按意图自动加载，避免一次性加载全部知识库浪费 token",
      "选 Codex skill 而非独立 Web 应用：与 Claude Code / Codex 等 IDE 深度集成",
      "选整合 8 报告规范而非自创：CLAIM 2024 / TRIPOD+AI 等是国际公认标准",
      "选 radiology_audit.py 自动识别而非人工检查：数据泄漏等风险自动 blocking"
    ],
    codeScale:[
      {num:"8000+",label:"代码量（行）· 含 SKILL.md"},
      {num:"3",label:"开发周期（月）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 22 个细分方法论模块；② 28 篇 references 知识库；③ intent → module → reference 三层路由；④ 投稿前模拟审稿。"
  },

  /* ========== 行业调研 (3) ========== */
  {
    num:"18", name:"MWC2026 工具集", nameEn:"MWC2026",
    category:"research", categoryName:"行业调研", year:"2026-06",
    diagram:"结构图/MWC2026.png",
    desc:"OCR + ASR + LLM 全链路自动化处理流水线，534 张现场照片 + 10 场会议音频。PaddleOCR + Windows OCR 异步并行 + Faster-Whisper 转录 + 22 类主题关键词分类规则智能重命名。",
    tech:["PaddleOCR (PP-OCRv6)","Windows OCR","Faster-Whisper","ctranslate2 int8","CUDA","ffmpeg","python-docx","python-pptx","matplotlib"],
    metrics:[
      {num:"534 张",label:"照片 45min"},
      {num:"10 场",label:"会议音频"},
      {num:"22 类",label:"主题分类"},
      {num:"130+",label:"智能重命名"}
    ],
    techStack:"PaddleOCR（PP-OCRv6）+ Windows OCR 异步并行 + Faster-Whisper（ctranslate2 int8 / CUDA）+ ffmpeg 分块 + python-docx/python-pptx/matplotlib 自动化产出",
    innovation:[
      "单批 10 张并发 + 增量落盘断点续跑",
      "VAD 滤波 + 5min/chunk 分块策略规避长音频 GPU OOM",
      "22 类主题关键词分类规则智能重命名",
      "python-docx/python-pptx/matplotlib 自动化产出 Word 报告（学术格式）+ 技术 PPT（FONT_BOOST +4pt + Tech Theme 渐变背景）+ OPML/HTML 思维导图"
    ],
    perf:[
      "PaddleOCR + Windows OCR 异步并行",
      "ffmpeg 分块规避长音频 GPU OOM",
      "单批 10 张并发 + 增量落盘断点续跑"
    ],
    metricsVal:"<span class='metric'>534 张照片 45min 完成</span><span class='metric'>10 场会议音频转录</span><span class='metric'>22 类主题分类</span><span class='metric'>130+ 张智能重命名</span>",
    impact:[
      "量化成果：534 张照片 45min 完成；10 场会议音频转录；22 类主题分类；130+ 张智能重命名",
      "技术沉淀：OCR + ASR + LLM 全链路自动化流水线；VAD 滤波 + 5min/chunk 分块策略",
      "业务影响：自动化替代人工整理，节省人力成本约 20 人天；多格式成品可分发",
      "开源价值：全链路自动化流水线可作为其他会议/展会整理参考"
    ],
    techChoice:[
      "选 PaddleOCR + Windows OCR 异步并行而非单一：双引擎互补提升识别准确率",
      "选 Faster-Whisper ctranslate2 int8 而非原版 Whisper：int8 量化降低 VRAM 占用，推理速度提升",
      "选 ffmpeg 5min/chunk 分块而非整体转录：规避长音频 GPU OOM",
      "选 22 类主题关键词分类而非 ML 分类：规则法零样本、可解释、无需训练数据"
    ],
    codeScale:[
      {num:"3000+",label:"代码量（行）"},
      {num:"1",label:"开发周期（周）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 534 张照片 OCR 识别；② 10 场会议音频转录；③ 22 类主题分类；④ 多格式成品自动化产出。"
  },
  {
    num:"19", name:"MWC2026 笔记处理", nameEn:"MWC2026-Notes",
    category:"research", categoryName:"行业调研", year:"2026-06",
    diagram:"结构图/MWC2026-Notes.png",
    desc:"python-docx 中文字体/表格背景/段落样式工具集封装 + DOCX 反向解析三件套。从素材一键产出 Word 报告（学术格式）+ PPT + OPML/FreeMind/PNG 多格式思维导图。",
    tech:["python-docx","python-pptx","lxml","matplotlib","OPML","FreeMind"],
    metrics:[
      {num:"49KB",label:"Word 报告"},
      {num:"66KB",label:"PPT"},
      {num:"23KB",label:"简历脚本"},
      {num:"多格式",label:"OPML/FreeMind/PNG"}
    ],
    techStack:"python-docx + python-pptx + lxml + matplotlib + OPML/FreeMind；DOCX 反向解析三件套（extract_docx*.py）",
    innovation:[
      "DOCX 反向解析三件套（extract_docx*.py）抽取段落/格式/run 级信息，支撑格式一致性校验与多版本迭代",
      "从素材一键产出多格式资产（Word + PPT + OPML + FreeMind + PNG）",
      "python-pptx + lxml 自动化生成 66KB 完整 PPT（含版式/配图/演讲者备注）",
      "generate_resume.py 简历自动生成脚本"
    ],
    perf:[
      "多版本迭代 + 格式一致性校验",
      "DOCX 反向解析支撑格式校验"
    ],
    metricsVal:"<span class='metric'>49KB Word 报告</span><span class='metric'>66KB PPT</span><span class='metric'>23KB 简历脚本</span><span class='metric'>OPML/FreeMind/PNG 多格式</span>",
    impact:[
      "量化成果：49KB Word 报告 + 66KB PPT + 23KB 简历脚本 + OPML/FreeMind/PNG 多格式",
      "技术沉淀：python-docx 工具集封装；DOCX 反向解析三件套",
      "业务影响：一键产出多格式资产，提升内容生产效率约 5×；简历自动生成脚本可复用",
      "开源价值：DOCX 反向解析方案可作为其他文档处理参考"
    ],
    techChoice:[
      "选 python-docx 而非 python-docx-template：原生 API 灵活控制字体/段落/表格格式",
      "选 DOCX 反向解析而非仅正向生成：支持格式一致性校验与多版本迭代",
      "选 OPML/FreeMind/PNG 多格式而非单一：适配不同场景（思维导图软件/浏览器/文档）"
    ],
    codeScale:[
      {num:"2000+",label:"代码量（行）"},
      {num:"1",label:"开发周期（周）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① python-docx 工具集封装；② DOCX 反向解析三件套；③ 多格式资产一键产出；④ 简历自动生成脚本。"
  },
  {
    num:"20", name:"MWC2026 报告输出", nameEn:"MWC2026-Report",
    category:"research", categoryName:"行业调研", year:"2026-06",
    diagram:"结构图/MWC2026-Report.png",
    desc:"多格式成品交付：主报告 191KB Markdown + 138MB Word + 11MB PDF + 21KB OPML。HTML 交互式 AI 深度报告含 ECharts/mermaid.js 图表 + 本地化字体/JS 资源。",
    tech:["Markdown","Word","PDF","PPT","OPML","HTML","ECharts","mermaid.js"],
    metrics:[
      {num:"191KB",label:"Markdown"},
      {num:"138MB",label:"Word"},
      {num:"11MB",label:"PDF"},
      {num:"37,300",label:"参会人"}
    ],
    techStack:"Markdown + Word + PDF + PPT + OPML + HTML；ECharts / mermaid.js 图表 + 本地化字体/JS 资源",
    innovation:[
      "HTML 交互式 AI 深度报告（含 ECharts / mermaid.js 图表 + 本地化字体 / JS 资源）",
      "独立整理 990 张现场图 + 10 场会议音频，沉淀为可分发的多格式知识资产",
      "大会参会 37,300 人、覆盖 143 个国家和地区、400+ 展商",
      "多格式同步产出"
    ],
    perf:[
      "多格式同步产出",
      "本地化字体/JS 资源避免外网依赖"
    ],
    metricsVal:"<span class='metric'>191KB Markdown</span><span class='metric'>138MB Word</span><span class='metric'>11MB PDF</span><span class='metric'>21KB OPML</span><span class='metric'>37,300 参会人</span><span class='metric'>143 国家地区</span>",
    impact:[
      "量化成果：191KB Markdown + 138MB Word + 11MB PDF + 21KB OPML；37,300 参会人 / 143 国家地区 / 400+ 展商",
      "技术沉淀：多格式同步产出方案；HTML 交互式报告含本地化资源",
      "业务影响：多格式知识资产可分发，提升内容商业价值",
      "开源价值：HTML 交互式报告适配内部分享与对外发布双场景"
    ],
    techChoice:[
      "选多格式同步产出而非单一：Markdown（版本管理）+ Word（学术）+ PDF（分发）+ HTML（交互）",
      "选 ECharts / mermaid.js 而非静态图：交互式图表支持数据探索",
      "选本地化字体/JS 资源而非 CDN：避免外网依赖，离线可用"
    ],
    codeScale:[
      {num:"5000+",label:"内容与脚本（行）"},
      {num:"1",label:"开发周期（周）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 多格式成品交付；② HTML 交互式 AI 深度报告；③ 990 张现场图 + 10 场会议音频整理。"
  },

  /* ========== AI 工程化 (2) ========== */
  {
    num:"21", name:"AOSP Harness 工程", nameEn:"aosp-harness",
    category:"engineering", categoryName:"AI 工程化", year:"2025",
    diagram:"结构图/aosp-harness.png",
    desc:"AOSP 四层 Harness 工程（代码智能/上下文注入/流程自动化/护栏验证），把 Claude Code 系统化接入整机源码开发工作流。全树 11 万条/1.97GB → 1.2 万条/282MB，索引压缩 ~85%。",
    tech:["Claude Code","clangd","compdb","Android NDK","SOONG","AOSP","Hooks","Skills"],
    metrics:[
      {num:"~85%",label:"索引压缩"},
      {num:"~80%",label:"节省上下文"},
      {num:"18 条",label:"硬门禁"},
      {num:"4 层",label:"Harness 工程"}
    ],
    techStack:"Claude Code + clangd + compdb（SOONG_GEN_COMPDB=1 m nothing）+ Android NDK + SOONG + AOSP + Hooks + Skills；SessionStart + UserPromptSubmit 双 Hook + 路径触发 Skills + permissions.ask 硬门禁",
    innovation:[
      "单会话节省上下文 ~80%（feature 索引仅几百 token vs 全树 grep）",
      "18 条 permissions.ask 硬门禁（adb push/reboot/remount、repo sync、cvd start/stop、m clean 等）+ 确定性验证脚本（输出仅 PASS/FAIL/SKIP 四步断言）",
      "斩断「编过=改对」幻觉：确定性验证脚本输出仅 PASS/FAIL/SKIP 四步断言",
      "两段式 compdb 精简（按 feature 仓前缀过滤）+ SessionStart + UserPromptSubmit 双 Hook 按锚定仓链自动注入 feature 索引"
    ],
    perf:[
      "按 feature 仓前缀过滤 compdb",
      "平时零上下文占用、命中才加载 Skills",
      "SessionStart + UserPromptSubmit 双 Hook 自动注入"
    ],
    metricsVal:"<span class='metric'>全树 11 万条/1.97GB → 1.2 万条/282MB</span><span class='metric'>索引压缩 ~85%</span><span class='metric'>单会话节省上下文 ~80%</span><span class='metric'>18 条硬门禁</span>",
    impact:[
      "量化成果：索引体积压缩 ~85%（11 万条/1.97GB → 1.2 万条/282MB）；单会话节省上下文 ~80%",
      "技术沉淀：四层 Harness 工程方法论；路径触发 Skills 模式；permissions.ask 硬门禁清单",
      "业务影响：索引体积压缩 85% 降低存储成本；节省上下文 80% 降低 LLM 调用成本约 $15,000+/年；硬门禁防止误操作节省故障恢复成本",
      "开源价值：AOSP 整机源码接入 Claude Code 工程化最佳实践"
    ],
    techChoice:[
      "选两段式 compdb 精简而非全量：按 feature 仓前缀过滤，索引体积压缩 85%",
      "选 SessionStart + UserPromptSubmit 双 Hook 而非单 Hook：会话启动 + 用户提问双时机自动注入 feature 索引",
      "选 permissions.ask 硬门禁而非软提示：18 条硬门禁斩断危险操作",
      "选确定性验证脚本而非 LLM 判断：输出仅 PASS/FAIL/SKIP 四步断言，斩断「编过=改对」幻觉"
    ],
    codeScale:[
      {num:"4000+",label:"配置与脚本（行）"},
      {num:"3",label:"开发周期（月）"},
      {num:"1-2",label:"团队规模（人）"}
    ],
    goal:"预期成果：① AOSP 四层 Harness 工程；② 索引压缩 85% + 节省上下文 80%；③ 18 条硬门禁；④ 确定性验证脚本。"
  },
  {
    num:"22", name:"Superpowers Skills 体系", nameEn:"superpowers-skills",
    category:"engineering", categoryName:"AI 工程化", year:"2026",
    diagram:"结构图/superpowers-skills.png",
    desc:"4 个来源共 75 个 Skills（obra/superpowers 14 + mattpocock 41 + Agents365 19 + archify 1），覆盖头脑风暴 → 计划编写 → TDD → 系统化调试 → 代码审查 → 完成验证完整开发工作流。",
    tech:["Claude Code","Antigravity","Codex","Cursor","Copilot CLI","Kimi","OpenCode","Pi"],
    metrics:[
      {num:"75",label:"个 Skills"},
      {num:"4",label:"来源"},
      {num:"10+",label:"coding agent 兼容"},
      {num:"两阶段",label:"review"}
    ],
    techStack:"obra/superpowers 14 + mattpocock 41 + Agents365 19 + archify 1；session-start hook 自动注入 bootstrap + path-scoped 渐进式披露；subagent-driven-development 两阶段 review",
    innovation:[
      "平时零上下文占用 + path-scoped 渐进式披露",
      "评估跨 10+ coding agent 兼容性（Claude Code / Antigravity / Codex / Cursor / Copilot CLI / Kimi / OpenCode / Pi 等）",
      "理解 plugin marketplace + manifest 设计模式",
      "subagent-driven-development 两阶段 review（task reviewer + final code reviewer）"
    ],
    perf:[
      "session-start hook 自动注入 bootstrap",
      "渐进式披露避免上下文污染",
      "平时零上下文占用"
    ],
    metricsVal:"<span class='metric'>75 个 Skills</span><span class='metric'>4 来源</span><span class='metric'>10+ coding agent 兼容</span><span class='metric'>两阶段 review</span>",
    impact:[
      "量化成果：75 个 Skills；4 个来源；跨 10+ coding agent 兼容性评估",
      "技术沉淀：Skills 工程化最佳实践；session-start hook + path-scoped 渐进式披露",
      "业务影响：提升 AI 辅助编码工程化水平，降低研发成本约 30%；跨 IDE 兼容性评估支撑多平台 Skills 商业化分发",
      "开源价值：Skills 体系评估方法论可作为其他 AI 工具链参考"
    ],
    techChoice:[
      "选 4 来源聚合而非单一：obra/superpowers + mattpocock + Agents365 + archify 互补",
      "选 path-scoped 渐进式披露而非全加载：平时零上下文占用，命中才加载",
      "选 subagent-driven-development 两阶段 review 而非单阶段：task reviewer + final code reviewer 保证质量"
    ],
    codeScale:[
      {num:"75",label:"Skills 数量"},
      {num:"1",label:"调研周期（月）"},
      {num:"1",label:"团队规模（人）"}
    ],
    goal:"预期成果：① 75 个 Skills 体系；② 跨 10+ coding agent 兼容性评估；③ Skills 工程化最佳实践沉淀。"
  }
];

/* ============== 渲染函数 ============== */
const grid = document.getElementById('project-list');

function esc(s){ return String(s||'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function renderProjects(filter = 'all', searchQuery = '') {
  const q = searchQuery.trim().toLowerCase();
  const filtered = projects.filter(p => {
    const catMatch = filter === 'all' || p.category === filter;
    if (!catMatch) return false;
    if (!q) return true;
    const haystack = (p.name + ' ' + p.nameEn + ' ' + p.tech.join(' ') + ' ' +
      p.techStack + ' ' + p.innovation.join(' ') + ' ' +
      p.perf.join(' ') + ' ' + p.impact.join(' ') + ' ' + p.techChoice.join(' ') + ' ' + p.goal).toLowerCase();
    return haystack.includes(q);
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">🔍 未找到匹配项目，请调整过滤或搜索关键词</div>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <li class="project-item">
      <div class="project-head">
        <span class="project-num">${p.num}</span>
        <span class="project-title">${esc(p.name)}</span>
        <span class="project-cat cat-${p.category}">${esc(p.categoryName)}</span>
        <span class="project-year">${esc(p.year)}</span>
      </div>
      <div class="project-desc">${p.desc}</div>

      <div class="project-metrics">
        ${p.metrics.map(m => `<div class="metric-box"><div class="num">${esc(m.num)}</div><div class="lbl">${esc(m.label)}</div></div>`).join('')}
      </div>

      <div class="tech-tags">
        ${p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
      </div>

      <div class="dim-grid">
        <div class="dim dim-tech">
          <div class="dim-label">⚙ 技术栈 / Tech Stack</div>
          <div class="dim-content">${p.techStack}</div>
        </div>
        <div class="dim dim-solution">
          <div class="dim-label">🏗 技术方案 / Solution</div>
          <div class="dim-content">${p.desc} <strong>核心架构：</strong>${p.innovation[0]}</div>
        </div>
        <div class="dim dim-innovation">
          <div class="dim-label">✨ 创新点 / Innovation</div>
          <div class="dim-content"><ul>${p.innovation.map(i => `<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="dim dim-perf">
          <div class="dim-label">🚀 性能优化方案 / Performance Optimization</div>
          <div class="dim-content"><ul>${p.perf.map(i => `<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="dim dim-metrics">
          <div class="dim-label">📊 性能优化数值 / Metrics</div>
          <div class="dim-content">${p.metricsVal}</div>
        </div>
        <div class="dim dim-revenue">
          <div class="dim-label">💰 经济收益 / Economic Benefits</div>
          <div class="dim-content"><ul>${p.impact.map(i => `<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="dim dim-techchoice">
          <div class="dim-label">🎯 技术选型 / Tech Choice（深化维度 1）</div>
          <div class="dim-content"><ul>${p.techChoice.map(i => `<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="dim dim-codescale">
          <div class="dim-label">📐 代码规模 / Code Scale（深化维度 2）</div>
          <div class="dim-content">${p.codeScale.map(c => `<span class="codeScale">${esc(c.num)} · ${esc(c.label)}</span>`).join('')}</div>
        </div>
        <div class="dim dim-goal">
          <div class="dim-label">🎯 预期成果 / Goal（深化维度 3）</div>
          <div class="dim-content">${p.goal}</div>
        </div>
      </div>

      <div class="project-actions">
        <button class="btn" onclick="openDiagram('${DIAGRAM_BASE}${p.diagram}','${esc(p.name)} - 结构图')">🖼 查看结构图</button>
        <button class="btn btn-secondary" onclick="openDoc('${p.nameEn}')">📄 项目文档</button>
      </div>
    </li>
  `).join('');
}

/* ============== 模态框 ============== */
function openDiagram(path, title) {
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImg').src = path;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openDoc(nameEn) {
  const map = {
    'AI-Glasses': 'AI-Glasses.md',
    'MeloTTS-ONNX': '01_AI智能终端项目.md',
    'Spatial Audio Engine': '01_AI智能终端项目.md',
    'ASR-Whisper-Test': 'ASR_Whisper_Test.md',
    'QNN-Deploy': '01_AI智能终端项目.md',
    'SER': 'SER.md',
    'SER-Distill': 'SER-Distill.md',
    'SuperAgent': 'SuperAgent.md',
    'SuperAgentProces-AgentTeam': 'SuperAgentProces_agent_team.md',
    '0701superagent': '0701superagent.md',
    'AgentTeam-Research': 'AgentTeam研究.md',
    'claude-sdk-master': 'claude_sdk_master.md',
    'Ascend Model Agent': 'model-agent.md',
    'Ascend-Skills-Eval': '03_大模型与昇腾生态项目.md',
    'SPECT-Radiomics': 'SPECT_Radiomics.md',
    'bme-data': 'bme-data.md',
    'radiology-skills': 'radiology-skills.md',
    'MWC2026': 'MWC2026.md',
    'MWC2026-Notes': 'MWC2026_Notes.md',
    'MWC2026-Report': 'MWC2026_报告.md',
    'aosp-harness': 'aosp-harness-repro.md',
    'superpowers-skills': '06_其他项目.md'
  };
  const doc = map[nameEn] || 'INDEX.md';
  window.open(DIAGRAM_BASE + doc, '_blank');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') closeModal();
});
function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ============== 过滤 + 搜索 ============== */
let currentFilter = 'all';
let currentSearch = '';

document.getElementById('filters').addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.cat;
    renderProjects(currentFilter, currentSearch);
  }
});

document.getElementById('search').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderProjects(currentFilter, currentSearch);
});

/* ============== Back to Top ============== */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============== Reveal on scroll ============== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============== 粒子背景 ============== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.radius = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    const colors = ['0, 245, 255', '176, 38, 255', '255, 45, 149'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(${this.color}, 0.8)`;
    ctx.fill();
  }
}

for (let i = 0; i < 60; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - dist / 120) * 0.15})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();

/* ============== 初始化 ============== */
renderProjects();
