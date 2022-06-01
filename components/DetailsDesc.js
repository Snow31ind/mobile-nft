import { View, Text } from 'react-native';
import { useState } from 'react';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants';
import React from 'react';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadmore] = useState(false);

  const readMoreHandler = () => {
    if (readMore) {
      setReadmore(false);
      setText(data.description.slice(0, 100));
    } else {
      setReadmore(true);
      setText(data.description);
    }
  };

  return (
    <React.Fragment>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 2 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
          <View style={{ mt: SIZES.base }}>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                color: COLORS.secondary,
                lineHeight: SIZES.large,
              }}
            >
              {text}
              {!readMore && '...'}
              <Text
                onPress={readMoreHandler}
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
              >
                {!readMore ? 'Read more' : 'Show less'}
              </Text>
            </Text>
          </View>
        </Text>
      </View>
    </React.Fragment>
  );
};

export default DetailsDesc;
