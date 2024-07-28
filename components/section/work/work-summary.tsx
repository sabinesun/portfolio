export const WorkSummary = ({ summary }) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/gu;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(summary)) !== null) {
    if (match.index > lastIndex) {
      parts.push(summary.slice(lastIndex, match.index));
    }

    parts.push(
      <a
        className="font-medium underline underline-offset-2"
        href={match[2]}
        key={match[2]}
        rel="noopener noreferrer"
        target="_blank"
      >
        {match[1]}
      </a>,
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < summary.length) {
    parts.push(summary.slice(Math.max(0, lastIndex)));
  }

  return parts;
};
