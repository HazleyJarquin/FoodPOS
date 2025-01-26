import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, IconButton } from "react-native-paper";

interface Props {
  title: string;
  subtitle: string;
  price: number;
  imageUri: string;
  moneySymbol: string;
  onIconPress: () => void;
  quantity?: number;
  layout: "vertical" | "horizontal";
}

export const ProductCard = ({
  imageUri,
  onIconPress,
  quantity,
  price,
  subtitle,
  title,
  moneySymbol,
  layout,
}: Props) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const isHorizontal = layout === "horizontal";

  return (
    <Card style={isHorizontal ? styles.horizontalCard : styles.card}>
      {!isHorizontal && (
        <Image
          source={{
            uri: imageError
              ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1737861729~exp=1737865329~hmac=c68a4c65bb5075e79d16a9d54b7bf9745c961886e11ad8e1b9d546eafe308faf&w=740"
              : imageUri,
          }}
          style={styles.image}
          onError={handleError}
        />
      )}

      <Card.Content
        style={isHorizontal ? styles.horizontalContent : styles.content}
      >
        {isHorizontal ? (
          <View style={styles.bottomRow}>
            {isHorizontal && (
              <Image
                source={{
                  uri: imageError
                    ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1737861729~exp=1737865329~hmac=c68a4c65bb5075e79d16a9d54b7bf9745c961886e11ad8e1b9d546eafe308faf&w=740"
                    : imageUri,
                }}
                style={styles.horizontalImage}
                onError={handleError}
              />
            )}
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>({subtitle})</Text>
              <Text style={[styles.subtitle, { fontWeight: "bold" }]}>
                Cantidad: {quantity}
              </Text>

              <Text style={styles.price}>
                {moneySymbol}
                {price ? price.toFixed(2) : "0.00"}
              </Text>
            </View>
            <IconButton
              mode="contained"
              style={isHorizontal ? styles.removeButton : styles.addButton}
              icon={isHorizontal ? "close" : "plus"}
              iconColor="#fff"
              onPress={onIconPress}
            />
          </View>
        ) : (
          <React.Fragment>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>({subtitle})</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={styles.price}>
                {moneySymbol}
                {price ? price.toFixed(2) : "0.00"}
              </Text>

              <IconButton
                mode="contained"
                style={isHorizontal ? styles.removeButton : styles.addButton}
                icon={isHorizontal ? "close" : "plus"}
                iconColor="#fff"
                onPress={onIconPress}
              />
            </View>
          </React.Fragment>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    margin: 10,
    width: "100%",
  },
  horizontalCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  horizontalImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  content: {
    padding: 10,
  },
  horizontalContent: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: "row",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A72DD",
  },
  addButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#1A72DD",
  },
  removeButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    backgroundColor: "red",
  },
});
