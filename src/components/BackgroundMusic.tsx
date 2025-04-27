import { AlignJustify as Spotify } from 'lucide-react';
import { Button } from './Button';

export function BackgroundMusic() {
  // Replace this with your actual Spotify playlist/album URL
  const spotifyUrl = "https://open.spotify.com/playlist/37i9dQZF1DX6P1Nsk3wSZj";

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <a
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button
          variant="outline"
          size="sm"
          className="bg-black hover:bg-black/90 text-green-500 border-none"
        >
          <Spotify className="h-5 w-5 mr-2" />
          <span className="text-sm">Ouça no Spotify</span>
        </Button>
      </a>
    </div>
  );
}