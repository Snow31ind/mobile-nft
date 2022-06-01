import { useState } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const searchHandler = (value) => {
    console.log(value);

    if (!value.length) {
      return setNftData(NFTData);
    }

    const filteredNFTData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log(filteredNFTData.length);

    return setNftData(filteredNFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={nftData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTCard data={item} />}
            ListHeaderComponent={<HomeHeader onSearch={searchHandler} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
