import React from 'react';
import { Badge } from '@mui/material';
import { ChatBubbleOutline } from '@mui/icons-material';
import { getMessageCount } from '../../utils/statusUtils';

interface MessageBadgeCellProps {
  row: any;
}

export const MessageBadgeCell: React.FC<MessageBadgeCellProps> = ({ row }) => {
  const messageCount = getMessageCount(row);
  
  return (
    <Badge
      badgeContent={messageCount}
      color="success"
      overlap="circular"
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      sx={{
        "& .MuiBadge-badge": {
          fontSize: "0.45rem",
          minWidth: 12,
          height: 12,
          borderRadius: "50%",
          padding: "0 2px",
        },
      }}
    >
      <ChatBubbleOutline 
        sx={{ 
          color: "#888", 
          fontSize: "0.75rem" 
        }} 
      />
    </Badge>
  );
};