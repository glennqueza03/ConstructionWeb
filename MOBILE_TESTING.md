# Testing on Mobile Device via IP Address

## Step 1: Find Your Computer's Local IP Address

### On macOS:
1. Open **System Settings** (or System Preferences on older macOS)
2. Go to **Network**
3. Select your active connection (Wi-Fi or Ethernet)
4. Your IP address will be displayed (e.g., `192.168.1.100`)

**OR use Terminal:**
```bash
# Find your IP address
ipconfig getifaddr en0    # For Wi-Fi
ipconfig getifaddr en1    # For Ethernet (if different)

# Or use this command to see all network interfaces
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### On Windows:
1. Open **Command Prompt** (cmd)
2. Type: `ipconfig`
3. Look for **IPv4 Address** under your active network adapter (e.g., `192.168.1.100`)

### On Linux:
```bash
ip addr show
# or
hostname -I
```

## Step 2: Start the Development Server

The Vite config has been updated to allow external connections. Simply run:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.100:5173/
```

**Note:** The "Network" URL is what you'll use on your phone.

## Step 3: Connect Your Phone

1. **Make sure your phone is on the same Wi-Fi network** as your computer
2. Open your phone's web browser (Safari, Chrome, etc.)
3. Type the **Network URL** from Step 2 (e.g., `http://192.168.1.100:5173/`)
4. The website should load on your phone!

## Troubleshooting

### Can't Access from Phone?

1. **Check Firewall Settings:**
   - macOS: System Settings → Network → Firewall
   - Make sure the firewall allows connections on port 5173
   - Or temporarily disable firewall to test

2. **Verify Same Network:**
   - Both devices must be on the same Wi-Fi network
   - Check your phone's Wi-Fi settings

3. **Check IP Address:**
   - Make sure you're using the correct IP address
   - The IP might change if you reconnect to Wi-Fi

4. **Try Different Port:**
   - If port 5173 is blocked, you can change it in `vite.config.ts`:
   ```typescript
   server: {
     host: true,
     port: 3000, // or any other port
   }
   ```

5. **Use Computer Name (macOS):**
   - Sometimes you can use: `http://your-computer-name.local:5173`
   - Find your computer name: System Settings → General → About

### Hot Reload on Mobile

Changes you make on your computer will automatically reload on your phone! This makes testing mobile responsiveness very easy.

## Alternative: Use ngrok (For Testing Outside Local Network)

If you want to test from anywhere (not just same Wi-Fi):

1. Install ngrok: `npm install -g ngrok`
2. Start your dev server: `npm run dev`
3. In another terminal: `ngrok http 5173`
4. Use the ngrok URL on your phone (works from any network)

## Quick Reference

- **Local URL:** `http://localhost:5173/` (only works on your computer)
- **Network URL:** `http://YOUR_IP:5173/` (works on devices on same Wi-Fi)
- **Default Port:** 5173 (can be changed in vite.config.ts)
