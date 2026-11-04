// RepoGo scoped local build, 2026-11-05. Upstream GPL-3.0 preserved.
import { tool as qrCodeGenerator } from './qr-code-generator';
import { tool as listConverter } from './list-converter';
import { tool as textStatistics } from './text-statistics';
import type { ToolCategory } from './tools.types';

export const toolsByCategory: ToolCategory[] = [
  { name: 'Images and videos', components: [qrCodeGenerator] },
  { name: 'Text', components: [listConverter, textStatistics] },
];
export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
