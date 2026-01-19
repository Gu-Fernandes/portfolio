export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} Gustavo Fernandes.</p>
      </div>
    </footer>
  );
}
