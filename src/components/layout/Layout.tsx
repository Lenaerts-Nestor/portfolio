import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces/interface";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
