import { LinkDesign } from "@/components/ui/link-design";

export const WorkSummary = ({ summary }: { summary: string }) => {
  // eslint-disable-next-line require-unicode-regexp, unicorn/better-regex
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(summary)) !== null) {
    if (match.index > lastIndex) {
      parts.push(summary.slice(lastIndex, match.index));
    }

    parts.push(<LinkDesign href={match[2]}>{match[1]}</LinkDesign>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < summary.length) {
    parts.push(summary.slice(Math.max(0, lastIndex)));
  }

  return parts;
};
