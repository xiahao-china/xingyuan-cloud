/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface GPUCard {
  name: string;
  specs: string;
  price: string;
  availability: 'Available' | 'Limited' | 'Sold Out';
  tag?: string;
}

export interface Stat {
  label: string;
  value: string;
  trend: string;
}
