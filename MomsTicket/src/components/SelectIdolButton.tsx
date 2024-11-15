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
            <Text>{text}</Text>
            {image && (
                <Image source={image} style={[styles.buttonImage, { width, height }]} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        mergin: 0,
        borderRadius: 8,
    },
    buttonImage: {
        marginRight: 0,
        merginTop: 0,
    },
});
