# SriSriGPT - Wisdom from the Heart of Gurudev

A minimalist and responsive Next.js frontend for an AI-powered spiritual guidance application inspired by Sri Sri Ravi Shankar's Weekly Knowledge Sheets.

## ✨ Features

### Core Functionality
- **Interactive Chat Interface**: Clean and intuitive chat experience with user and assistant messages
- **Peaceful UI Design**: Calming color palette with white, light beige, and saffron gradients
- **Real-time Communication**: Ready to connect to FastAPI backend via `/api/chat` endpoint
- **Smooth Animations**: Gentle transitions and fade-in effects for a meditative experience

### UI Components
- **Header Section**:
  - Circular portrait placeholder for Sri Sri Ravi Shankar
  - Background banner with soft blur effect
  - "About Gurudev" and "Clear Chat" buttons

- **Chat Messages**:
  - User messages: Right-aligned with light cream tone
  - Assistant messages: Left-aligned with white card, golden border, and soft glow
  - Metadata display: Knowledge Sheet title, theme, and date
  - Reflection quotes: Italic wisdom quotes below assistant responses

- **Loading State**: Spinning Om-inspired icon with "Gurudev is reflecting..." message

### Bonus Features
✅ **About Modal**: Detailed information about Sri Sri Ravi Shankar and his teachings  
✅ **Meditation Timer**: Floating "Meditate Now" button with 1-minute breathing animation  
✅ **Clear Chat**: Reset conversation to start fresh  
✅ **Fully Responsive**: Mobile-friendly design that works across all devices

## 🛠 Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **HTTP Client**: Axios (ready for backend integration)
- **UI Interactions**: React hooks (useState, useEffect, useRef)

## 📦 Installation

1. Navigate to the project directory:
```bash
cd srisrigpt
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🔌 Backend Integration

The frontend is ready to connect to your FastAPI backend. To integrate:

1. Open `app/page.tsx`
2. Locate the `handleSendMessage` function
3. Uncomment the axios import and API call:

```typescript
import axios from 'axios';

// In handleSendMessage function:
const response = await axios.post('/api/chat', { 
  message: content 
});
const assistantMessage: Message = response.data;
```

4. Update the API endpoint URL if needed (e.g., `http://localhost:8000/api/chat`)

### Expected API Response Format
```json
{
  "id": "unique-id",
  "role": "assistant",
  "content": "Wisdom response text...",
  "metadata": {
    "title": "Knowledge Sheet #123",
    "theme": "Peace and Wisdom",
    "date": "2024"
  },
  "reflection": "A short reflection or quote..."
}
```

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1280px and above)
- Tablet (768px - 1024px)
- Mobile (375px - 667px)

## 🎨 Color Palette

- **Background**: Light beige (`#fffbf5`)
- **Primary Orange**: `#ff9933` (saffron)
- **Secondary Orange**: `#ff8000`
- **Accent Yellow**: `#fbbf24`
- **Text Primary**: `#171717`
- **Text Secondary**: `#4b5563`

## 📂 Project Structure

```
srisrigpt/
├── app/
│   ├── components/
│   │   ├── AboutModal.tsx       # About Gurudev modal
│   │   ├── ChatInput.tsx        # Message input component
│   │   ├── ChatMessage.tsx      # Individual message display
│   │   ├── Header.tsx           # App header with logo & buttons
│   │   ├── LoadingSpinner.tsx   # Loading state indicator
│   │   └── MeditationModal.tsx  # Meditation timer modal
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main chat page
│   └── types.ts                 # TypeScript interfaces
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🌟 Key Components

### Header
- Displays app title and tagline
- Circular avatar placeholder
- Action buttons (About, Clear)

### ChatMessage
- Renders user and assistant messages
- Shows metadata tags
- Displays reflection quotes

### ChatInput
- Text input with send button
- Disabled during loading state
- Smooth focus transitions

### AboutModal
- Information about Sri Sri Ravi Shankar
- Inspirational quote
- Close button with smooth animations

### MeditationModal
- 60-second countdown timer
- Circular progress indicator
- Breathing instructions
- Start/Pause/Reset controls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Sri Sri Ravi Shankar's Weekly Knowledge Sheets
- Built with love for seekers of wisdom and inner peace

---

**Made with 🧡 for spiritual seekers worldwide**
