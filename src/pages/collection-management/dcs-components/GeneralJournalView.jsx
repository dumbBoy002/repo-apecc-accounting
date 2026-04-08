import { MenuBook } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function GeneralJournalView() {
    return (
        <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <MenuBook sx={{ fontSize: 32, color: '#eab308' }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
                        General Journal
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, mb: 0.5, fontSize: '0.75rem' }}>
                        Record all general journal entries.
                    </Typography>

                    <Box>
                        <Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}