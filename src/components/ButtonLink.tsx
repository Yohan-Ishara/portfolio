import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function ButtonLink({ children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  const variants = {
    primary:
      'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-200',
    secondary:
      'border border-white/15 bg-white/10 text-white hover:border-cyan-300/40 hover:bg-cyan-300/10 light:border-slate-200 light:bg-white light:text-slate-950 light:hover:border-cyan-300',
    ghost: 'text-slate-300 hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950',
  };

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
