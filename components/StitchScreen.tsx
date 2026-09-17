type StitchScreenProps = { slug: string; title: string };

export function StitchScreen({ slug, title }: StitchScreenProps) {
  return (
    <iframe
      className="screen-frame"
      src={`/stitch/${slug}/code.html`}
      title={title}
      allow="clipboard-write"
    />
  );
}
