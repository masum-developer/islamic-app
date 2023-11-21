import Image from 'next/image';
import React from 'react';
import dua from "@/assets/category/dua.jpg";
import home from "@/assets/menu/home.jpg";
import allduas from "@/assets/menu/allduas.jpg";
import memorize from "@/assets/menu/memorize.jpg";
import bookmark from "@/assets/menu/bookmark.jpg";
import ruqyah from "@/assets/menu/ruqyah.jpg";
import duainfo from "@/assets/menu/duainfo.jpg";
import book from "@/assets/menu/book.jpg";
const NavBar = () => {
    return (
        <div className="bg-white w-24 h-[600px] mb-8 pb-8 rounded-xl flex flex-col items-center gap-6">
              <Image className="pt-3 pb-8" src={dua} alt="dua"></Image>
              <div>
              <Image src={home} alt="dua"></Image>
              </div>
              <div>
              <Image src={allduas} alt="dua"></Image>
              </div>
              <div>
              <Image src={memorize} alt="dua"></Image>
              </div>
              <div>
              <Image src={bookmark} alt="dua"></Image>
              </div>
              <div>
              <Image src={ruqyah} alt="dua"></Image>
              </div>
              <div>
              <Image src={duainfo} alt="dua"></Image>
              </div>
              <div>
              <Image src={book} alt="dua"></Image>
              </div>
            </div>
    );
};

export default NavBar;