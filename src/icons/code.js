/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { h } from 'preact';

import { IconWrapper } from './icon-wrapper';

export const CodeSvg = ({
  size,
  color = '#000000',
  backgroundColor = '#FFFFFF'
}) => (
  <IconWrapper size={size} viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <g>
      <path
        fill={color}
        d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
      />
    </g>
  </IconWrapper>
);