const keyboard = {
    keys: 10,
    connectionType: "USB"
}   as const;

// keyboard.connectionType = "Bluetooth"; // Error

console.log(keyboard)