import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/inputs.css";
import "./styles/buttons.css";
import "./globals.css";

export const metadata = {
  title: "Practice Set 2.1 - Group 4",
  description:
    "Made by members of group 4 in Platform Technologies SY 2023-2024 Second Semester IT22S8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
