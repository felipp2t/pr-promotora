import React from "react";

export const HightlightRoot = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex max-w-[500px] gap-4 px-3 py-2">{children}</div>;
};

export const HighlightIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-primary/50 bg-primary flex size-fit items-center justify-center rounded-full p-1.5 text-white">
      {children}
    </div>
  );
};

export const HighlightContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-0.5">{children}</div>;
};

export const HighlightTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-body text-foreground font-bold">{children}</h2>;
};

export const HighlightDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-muted-foreground w-full text-sm">{children}</p>;
};
