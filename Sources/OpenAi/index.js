import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import {
  RNButton,
  RNImageLoader,
  RNInput,
  RNKeyboardAvoid,
  RNLoader,
  RNStyles,
} from '../Common';
import { Colors, hp, wp } from '../Constants';

const BaseUrl = 'https://api.openai.com/v1';

const OpenAi = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [TextCompletion, setTextCompletion] = useState({
    Input: '',
  });
  const [ImageGenerations, setImageGenerations] = useState({
    data: [],
    imageLength: 1,
    Input: '',
  });

  useEffect(() => {
    // Completion();
  }, []);

  const ImageGeneration = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const response = await ApiCall({
        Endpoint: '/images/generations',
        Params: {
          prompt: ImageGenerations.Input,
          n: ImageGenerations.imageLength,
          size: '1024x1024',
        },
      });
      setIsLoading(false);
      setImageGenerations(p => ({ ...p, data: response?.data || [] }));
      // console.log(
      //   'ImageGeneration response -> ',
      //   JSON.stringify(response, null, 2),
      // );
    } catch (e) {
      setIsLoading(false);
      console.log('ImageGeneration Error -> ', JSON.stringify(e, null, 2));
    }
  };

  const Completion = async () => {
    try {
      const response = await ApiCall({
        Endpoint: '/completions',
        Params: {
          model: 'text-davinci-003',
          prompt: 'suggestion name of cats' || TextCompletion.Input,
          temperature: 0.5,
        },
      });
      // console.log('Completion response -> ', JSON.stringify(response, null, 2));
    } catch (e) {
      console.log('Completion Error -> ', JSON.stringify(e, null, 2));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.Container}>
        <RNLoader visible={IsLoading} />

        <RNKeyboardAvoid>
          <ScrollView>
            <View style={styles.Content}>
              {ImageGenerations.data?.length > 0 &&
                ImageGenerations.data.map((v, i) => (
                  <RenderImages
                    key={i}
                    item={v}
                    length={ImageGenerations.data?.length}
                  />
                ))}
            </View>
          </ScrollView>

          <View style={RNStyles.flexRow}>
            <RNInput
              placeholder={'Enter your query'}
              onChangeText={t => setImageGenerations(p => ({ ...p, Input: t }))}
              style={styles.Input}
              onSubmitEditing={Keyboard.dismiss}
            />
            <RNInput
              placeholder={'N'}
              onChangeText={t =>
                setImageGenerations(p => ({ ...p, imageLength: Number(t) }))
              }
              style={styles.Number}
              keyboardType={'numeric'}
              maxLength={1}
              onSubmitEditing={Keyboard.dismiss}
            />
            <RNButton
              title={'Go'}
              style={styles.sendButton}
              onPress={ImageGeneration}
            />
          </View>
        </RNKeyboardAvoid>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const RenderImages = ({ item, length }) => {
  const [ImageLoading, setImageLoading] = useState(false);
  return (
    <View
      style={[
        styles.renderImage,
        {
          width: length > 1 ? wp(87) / 2 : wp(90),
          height: hp(80) / length,
        },
      ]}>
      <RNImageLoader
        visible={ImageLoading}
        color={Colors.PrimaryButton}
        size={'small'}
      />
      <FastImage
        source={{ uri: item?.url }}
        resizeMode={'cover'}
        style={RNStyles.image100}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
  },
  Content: {
    ...RNStyles.container,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  Input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.PrimaryButton,
    marginHorizontal: wp(2),
    borderRadius: wp(3),
    marginRight: 0,
  },
  sendButton: {
    borderRadius: 100,
    paddingHorizontal: wp(5),
  },
  Number: {
    flex: 0,
  },
  renderImage: {
    marginVertical: hp(0.5),
    marginHorizontal: wp(1),
    borderWidth: 1,
    borderColor: Colors.PrimaryButton,
  },
});

export default OpenAi;

const ApiCall = async ({ Endpoint, Params }) => {
  const ToJson = await fetch(BaseUrl + Endpoint, {
    method: 'POST',
    body: JSON.stringify(Params),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Config?.OpenAiApi}`,
    },
  });
  const response = await ToJson?.json();
  return response;
};
