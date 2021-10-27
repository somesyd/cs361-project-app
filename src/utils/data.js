const dreamText = {
    dream: "I am in a room, a kitchen….I hear someone talking with Rachel from the television show \“Friends\”….Someone is trying to get her to do something….She is confused, does not want to do it, cannot help….It seems unfair to her, and I start crying in deep sadness….I put my hands over my eyes, and rest my head on the wood island in the middle of the kitchen, and I cry hard for her….Earlier, I am trying to find clothes for a group of people….I do find some, with a cool symbol on the left shoulder….the symbol provides a special pass or benefit to those who wear it….Hmm, I am surprised and pleased, that turned out better than I expected…."
}
const characters = {
    dreamego: [
        "I am in a room, a kitchen",
        "I hear someone talking with Rachel",
        "I start crying in deep sadness",
        "I put my hands over my eyes",
        "I cry hard for her", 
        "I am trying to find clothes for a group of people",
        "I do find some",
        "I am surprised and pleased"
        ],
    agency: 'agencymeter.svg',
    anim: ["Rachel from the television show \“Friends\”", "another character", "and another" ],
    figures: ["group of people", "person example", "another example"]
}

const shadow = {
    words: [
        "She is confused",
        "does not want to do it",
        "seems unfair to her"
    ],
    meter: 'shadowmeter.svg'
}

const motifs = {
    graph: 'motifs.svg'
}



const settingText = {
    textList: ["in a room", "a kitchen", "the television show \"Friends\"", "middle of the kitchen"]
}

const settingPhotos = {
    files: [
        'dream-img-1.jpeg', 
        'dream-img-2.jpeg', 
        'dream-img-3.jpeg', 
        'dream-img-4.jpg', 
        'dream-img-5.jpg', 
        'dream-img-6.jpeg'
    ]
}

const suggest = {
    characters: {
        title: "Suggestions for how to interpret characters in a dream.",
        text: "Vivamus et fringilla velit. Nam at dictum lectus, dictum imperdiet lectus. Integer vulputate fringilla orci a pharetra. Ut id justo lobortis turpis varius congue. Vivamus pretium massa a lectus egestas, vel condimentum purus semper. Maecenas magna eros, vulputate quis convallis quis, fringilla in nisi. Nullam eu erat urna. Proin hendrerit lorem metus, ac mattis nisl ultrices ac. Sed ut sapien a odio sollicitudin fermentum."
    },
    symbols: {
        title: "Suggestions for how to interpret symbols in a dream.",
        text: "Donec sodales elementum sem. Curabitur nec elit nec nibh hendrerit luctus. Sed laoreet nunc mi, ut vulputate velit congue maximus. Donec egestas ullamcorper lectus vitae ornare. Aliquam auctor eu dolor sed venenatis. Proin non eros ipsum. Donec accumsan sagittis venenatis. Aliquam vitae iaculis turpis, eget accumsan arcu. Curabitur fermentum purus dui, sit amet mollis orci vehicula id. Sed viverra est at venenatis facilisis. Donec id sapien lacus. Donec varius, lacus eget rhoncus dictum, magna lectus feugiat ligula, sit amet tincidunt arcu orci nec nibh. In vitae vestibulum dui. Nam tempus nisl sapien, a faucibus erat congue eu."
    },
    shadow: {
        title: "Suggestions for how to interpret shadow in a dream",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras fermentum odio nec orci ullamcorper, id sodales felis iaculis. Integer ut ornare ex. Mauris sit amet arcu mattis, placerat tortor et, porttitor neque. Ut convallis justo nibh, eget volutpat purus dignissim accumsan. Proin porttitor faucibus posuere. Nullam vitae urna fermentum, luctus augue eget, porttitor purus. Pellentesque vitae ex in turpis pharetra semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus vel justo ut suscipit. Pellentesque luctus feugiat ullamcorper. Proin nec ultrices velit, sed imperdiet tortor. Ut et tortor varius, vehicula quam et, dictum justo. Vivamus elementum erat tellus, rutrum euismod ligula gravida vel. Mauris imperdiet, erat faucibus tincidunt congue, augue justo ultrices tellus, ac rutrum est neque ac mauris.\n\nNam quis dui eros. Aliquam eget urna sem. Etiam et malesuada nisl, at malesuada risus. Duis consequat orci nulla, eget semper tortor dapibus a. Sed eleifend elit varius urna cursus dignissim. Maecenas viverra est sit amet purus egestas, ac gravida nunc convallis. Maecenas lobortis eget leo sit amet bibendum. Quisque metus augue, molestie non pulvinar id, pharetra at massa. Suspendisse augue urna, laoreet non mi aliquet, commodo bibendum eros. Curabitur in metus semper, sagittis nisl ut, fringilla nulla. Aliquam ut eleifend purus. Nam non nisi lorem. Quisque nisl arcu, finibus rutrum porttitor et, vestibulum sit amet odio. Curabitur ornare diam ac lorem facilisis tincidunt. Proin ultricies, nibh ac varius laoreet, justo arcu elementum ante, ac consequat odio ipsum a urna."
    },
    motifs: {
        title: "Suggestions for how to interpret motifs in a dream.",
        text: "Donec sodales elementum sem. Curabitur nec elit nec nibh hendrerit luctus. Sed laoreet nunc mi, ut vulputate velit congue maximus. Donec egestas ullamcorper lectus vitae ornare. Aliquam auctor eu dolor sed venenatis. Proin non eros ipsum. Donec accumsan sagittis venenatis. Aliquam vitae iaculis turpis, eget accumsan arcu. Curabitur fermentum purus dui, sit amet mollis orci vehicula id. Sed viverra est at venenatis facilisis. Donec id sapien lacus. Donec varius, lacus eget rhoncus dictum, magna lectus feugiat ligula, sit amet tincidunt arcu orci nec nibh. In vitae vestibulum dui. Nam tempus nisl sapien, a faucibus erat congue eu."
    }
}

const symbols = {
    list: [
        {   id: 1,
            name: "television show",
            image: 'television-show.jpeg',
            text: "A television show – or simply TV show – is any content produced for viewing on a television set which can be broadcast via over-the-air, satellite, or cable, excluding breaking news, advertisements, or trailers that are typically placed between shows. Television shows are most often scheduled for broadcast well ahead of time and appear on electronic guides or other TV listings, but streaming services often make them available for viewing anytime. The content in a television show can be produced with different methodologies such as taped variety shows emanating from a television studio stage, animation or a variety of film productions ranging from movies to series. Shows not produced on a television studio stage are usually contracted or licensed to be made by appropriate production companies."
        },
        {   id: 2,
            name: "kitchen",
            image: 'kitchen.jpeg',
            text: "A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. A modern middle-class residential kitchen is typically equipped with a stove, a sink with hot and cold running water, a refrigerator, and worktops and kitchen cabinets arranged according to a modular design. Many households have a microwave oven, a dishwasher, and other electric appliances. The main functions of a kitchen are to store, prepare and cook food (and to complete related tasks such as dishwashing). The room or area may also be used for dining (or small meals such as breakfast), entertaining and laundry. The design and construction of kitchens is a huge market all over the world.\n\nCommercial kitchens are found in restaurants, cafeterias, hotels, hospitals, educational and workplace facilities, army barracks, and similar establishments. These kitchens are generally larger and equipped with bigger and more heavy-duty equipment than a residential kitchen. For example, a large restaurant may have a huge walk-in refrigerator and a large commercial dishwasher machine. In some instances, commercial kitchen equipment such as commercial sinks is used in household settings as it offers ease of use for food preparation and high durability.\n\nIn developed countries, commercial kitchens are generally subject to public health laws. They are inspected periodically by public-health officials, and forced to close if they do not meet hygienic requirements mandated by law."
        },
        {
            id: 3,
            name: "hands",
            image: 'hands.jpeg',
            text: "A hand is a prehensile, multi-fingered appendage located at the end of the forearm or forelimb of primates such as humans, chimpanzees, monkeys, and lemurs. A few other vertebrates such as the koala (which has two opposable thumbs on each hand and fingerprints extremely similar to human fingerprints) are often described as having hands instead of paws on their front limbs. The raccoon is usually described as having hands though opposable thumbs are lacking.\n\nSome evolutionary anatomists use the term hand to refer to the appendage of digits on the forelimb more generally — for example, in the context of whether the three digits of the bird hand involved the same homologous loss of two digits as in the dinosaur hand.\n\nThe human hand usually has five digits: four fingers plus one thumb;[3][4] these are often referred to collectively as five fingers, however, whereby the thumb is included as one of the fingers.[3][5][6] It has 27 bones, not including the sesamoid bone, the number of which varies among people,[7] 14 of which are the phalanges (proximal, intermediate and distal) of the fingers and thumb. The metacarpal bones connect the fingers and the carpal bones of the wrist. Each human hand has five metacarpals[8] and eight carpal bones.\n\nFingers contain some of the densest areas of nerve endings in the body, and are the richest source of tactile feedback. They also have the greatest positioning capability of the body; thus, the sense of touch is intimately associated with hands. Like other paired organs (eyes, feet, legs) each hand is dominantly controlled by the opposing brain hemisphere, so that handedness—the preferred hand choice for single-handed activities such as writing with a pencil, reflects individual brain functioning.\n\nAmong humans, the hands play an important function in body language and sign language. Likewise, the ten digits of two hands and the twelve phalanges of four fingers (touchable by the thumb) have given rise to number systems and calculation techniques."
        },
        {
            id: 4,
            name: "eye",
            image: 'eye.jpeg',
            text: "Eyes are organs of the visual system. They provide animals with vision, the ability to receive and process visual detail, as well as enabling several photo response functions that are independent of vision. Eyes detect light and convert it into electro-chemical impulses in neurons. In higher organisms, the eye is a complex optical system which collects light from the surrounding environment, regulates its intensity through a diaphragm, focuses it through an adjustable assembly of lenses to form an image, converts this image into a set of electrical signals, and transmits these signals to the brain through complex neural pathways that connect the eye via the optic nerve to the visual cortex and other areas of the brain. Eyes with resolving power have come in ten fundamentally different forms, and 96% of animal species possess a complex optical system.[1] Image-resolving eyes are present in molluscs, chordates and arthropods.[2]\n\nThe most simple eyes, pit eyes, are eye-spots which may be set into a pit to reduce the angles of light that enters and affects the eye-spot, to allow the organism to deduce the angle of incoming light.[1] From more complex eyes, retinal photosensitive ganglion cells send signals along the retinohypothalamic tract to the suprachiasmatic nuclei to effect circadian adjustment and to the pretectal area to control the pupillary light reflex."
        }
    ]
}



module.exports = {
    dreamText: dreamText,
    settingText: settingText,
    settingPhotos: settingPhotos,
    characters: characters,
    suggest: suggest,
    symbols: symbols,
    shadow: shadow,
    motifs: motifs
}