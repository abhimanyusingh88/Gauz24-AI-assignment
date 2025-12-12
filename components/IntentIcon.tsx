import { 
  HandThumbUpIcon, 
  HandThumbDownIcon, 
  ChatBubbleLeftEllipsisIcon, 
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';

export const IntentIcon = ({ intent }: { intent: string }) => {
  const i = intent.toLowerCase();
  if (i.includes('praise') || i.includes('positive')) return <HandThumbUpIcon className="w-4 h-4 opacity-75" />;
  if (i.includes('complaint') || i.includes('negative')) return <HandThumbDownIcon className="w-4 h-4 opacity-75" />;
  if (i.includes('bug') || i.includes('issue')) return <ExclamationTriangleIcon className="w-4 h-4 opacity-75" />;
  return <ChatBubbleLeftEllipsisIcon className="w-4 h-4 opacity-75" />;
};
