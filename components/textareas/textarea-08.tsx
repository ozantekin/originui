import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Textarea08() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-08">Shorter textarea</Label>
      <Textarea id="textarea-08" className="min-h-[none]" placeholder="Leave a comment" rows={2} />
    </div>
  );
}
