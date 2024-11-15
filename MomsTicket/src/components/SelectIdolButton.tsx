import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

type SectionProps = {
    onPress: (label: string) => void;
    text: string;
    image: ImageSourcePropType;
    height?: string;
    width?: string;
};

export default function SelectIdolButton({ onPress, text, image, height = '90%', width = '93.5%' }: SectionProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { width, height }]}
            onPress={() => onPress(text)}
        >
            <Text style={styles.buttonText}>{text}</Text>
            {image && (
                <Image source={image} style={[styles.buttonImage, { height: '100%', width: '100%' }]} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        marginRight: 10,
    },
    buttonImage: {
        resizeMode: 'contain',
    },
});
