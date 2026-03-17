/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, Feature, GPUCard, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '价格', href: '#pricing' },
  { label: '文档', href: '#docs' },
];

export const FEATURES: Feature[] = [
  {
    title: '即时部署',
    description: '通过我们的自动化编排系统，在几秒钟内部署高性能 GPU 实例。',
    icon: 'Zap',
  },
  {
    title: 'NVIDIA H100 集群',
    description: '访问全球最强大的 AI 基础设施，用于模型训练和推理。',
    icon: 'Cpu',
  },
  {
    title: '全球边缘网络',
    description: '分布在全球主要数据中心的低延迟计算节点。',
    icon: 'Globe',
  },
  {
    title: '企业级安全',
    description: '隔离的 VPC、加密存储以及符合 SOC2 标准的基础设施。',
    icon: 'Shield',
  },
];

export const GPU_CARDS: GPUCard[] = [
  {
    name: 'NVIDIA H100',
    specs: '80GB HBM3 | 3,350 TFLOPS',
    price: '¥17.50/时',
    availability: 'Available',
    tag: '最强算力',
  },
  {
    name: 'NVIDIA A100',
    specs: '80GB SXM4 | 624 TFLOPS',
    price: '¥8.20/时',
    availability: 'Available',
  },
  {
    name: 'NVIDIA L40S',
    specs: '48GB GDDR6 | 91.6 TFLOPS',
    price: '¥6.10/时',
    availability: 'Limited',
  },
];

export const STATS: Stat[] = [
  { label: '总算力储备', value: '42.5 PFLOPS', trend: '+12%' },
  { label: '活跃节点', value: '12,402', trend: '+5%' },
  { label: '网络带宽', value: '800 Gbps', trend: '稳定' },
  { label: '在线率承诺', value: '99.99%', trend: '保证' },
];
