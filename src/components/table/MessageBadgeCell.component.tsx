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
          fontSize: "0.7rem",
          minWidth: 18,
          height: 18,
          borderRadius: "50%",
        },
      }}
    >
      <ChatBubbleOutline style={{ color: "#888" }} />
    </Badge>
  );
};
