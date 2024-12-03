import "./globals.css";

export const metadata = {
    title: "Lloyds Sustainability Club",
    description: "Track your eco-friendly progress and earn rewards",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
