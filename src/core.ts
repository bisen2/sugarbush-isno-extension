import {match} from 'ts-pattern';
import * as borderify from './borderify';
import * as valvePctPosition from './valve-pct-position'
import * as weatherStationSetup from './weather-station-setup'

export enum Tweak {
    Borderify = "borderify",
    ValvePctPosition = "valve-pct-position",
    WeatherStationSetup = 'weather-station-setup'
}

export interface Profile {
    id: string,
    settings: Array<Tweak>
}

export function getTweak(tweak: Tweak) : { description: string, apply(doc: Document): void } {
    return match(tweak)
        .with(Tweak.Borderify, () => borderify)
        .with(Tweak.ValvePctPosition, () => valvePctPosition)
        .with(Tweak.WeatherStationSetup, () => weatherStationSetup)
        .exhaustive();
}

export function applyProfile(profile: Profile, doc: Document): void { profile.settings.forEach(t => getTweak(t).apply(doc)) }

const testProfile = {
    id: "Test",
    settings: Object.values(Tweak)
}

applyProfile(testProfile, document);
