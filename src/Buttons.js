import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons({ bgcolor, textcolor, btnlabel, press, bgwidth }) {
    return (
        <TouchableOpacity onPress={press} style={{ backgroundColor: bgcolor, borderRadius: 10, marginBottom: 15, borderColor: 'white', borderWidth: 0.3, paddingVertical: 10, alignItems: 'center', width: bgwidth }}>

            <Text style={{ color: textcolor, padding: 5, fontSize: 15, fontWeight: 'bold' }}>{btnlabel}</Text>

        </TouchableOpacity>

    );
}