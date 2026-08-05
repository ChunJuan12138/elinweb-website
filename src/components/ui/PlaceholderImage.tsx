interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export function PlaceholderImage({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-steel-300 bg-steel-50 ${aspectRatio} ${className}`}
    >
      <div className="text-center px-6">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-steel-200 text-steel-500">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-steel-500">{label}</p>
        <p className="mt-1 text-xs text-steel-400">图片占位，后续替换</p>
      </div>
    </div>
  );
}
